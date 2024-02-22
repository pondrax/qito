<script>
  import { loading, toast } from "$lib/store";
  import { onMount } from "svelte";
  import { db } from "$lib/db";
  import { t } from "$lib/lang";
  import { fnSelect } from "$lib/ui/fnSelect";
  import { fnModal } from "floeui/dist/directives";

  /**
   * @type {import("pocketbase").ListResult<import("pocketbase").RecordModel>}
   */
  let collections;
  /**
   * @type {string | any[]}
   */
  let selections = [];
  let columns = [];
  /**
   * @type {any}
   */
  let modal;
  onMount(async () => {
    await refresh();
  });

  async function refresh() {
    $loading = true;
    collections = await db.collection("audits").getList(1, 500, {
      filter: `template.id="indeks_kami_4_2"`,
      // filter: `auditsDetails(question).score~"0"`,
      // filter: `auditsDetails(question).audit="fojf8eguh7na8et"`,
      expand: "organization,auditee,auditor",
      sort: "-created",
      requestKey: "ikami",
    });
    setTimeout(() => ($loading = false), 500);
  }
  async function submit() {
    $loading = true;
    try {
      const data = {
        template: modal.template,
        question: modal.id,
        answer: modal.answer,
        score: modal.score,
        media: modal.file ? [...modal.file] : undefined,
      };
      console.log(data, modal);
      if (!modal.aid) {
        await db.collection("auditsDetails").create(data);
      } else {
        await db.collection("auditsDetails").update(modal.aid, data);
      }
      $toast = [{ action: $t("action.saved") }];
    } catch (/** @type {any} */ e) {
      ///
      console.log(e);
      $toast = [{ error: e?.data }];
    }
    modal = false;
    refresh();
  }
</script>

<div modal use:fnModal={modal} on:close={() => (modal = false)}>
  <div w-5xl max-w-full>
    <button modal-close on:click={() => (modal = false)}> &times; </button>
    {#if modal}
      <form on:submit|preventDefault={submit}>
        <h1 text-lg mb-3>{modal.question} ({modal.score})</h1>
        <div h-80vh overflow-auto>
          <p pb-5>{modal.hint}</p>
          <div grid grid-cols-1 gap-5>
            <div form-control max-w-full>
              <span>Opsi Penilaian</span>
              <div use:fnSelect={modal.options}>
                <textarea
                  input
                  filter
                  placeholder="Pilih Opsi"
                  min-h-8
                  rounded-box
                />
                <input type="hidden" selected bind:value={modal.score} />
                <div relative w-full>
                  <ul
                    menu
                    top-0
                    hidden
                    absolute
                    bg-base
                    h-48
                    z-10
                    overflow-auto
                    rounded-box
                    shadow
                  >
                    <li option>
                      <label flex gap-2 cursor-pointer>
                        <input
                          type="checkbox"
                          checkbox
                          shrink-0
                          tabindex="-1"
                        />
                        <div option-label />
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div form-control max-w-full>
              <span>Keterangan</span>
              <textarea
                input
                bind:value={modal.answer}
                rows="3"
                h-auto
                rounded-box
              />
            </div>

            <div form-control max-w-full>
              <input type="file" input bind:files={modal.file} multiple />
              <div>
                <div carousel w-full rounded-box min-h-40vh border>
                  {#each modal.media as media}
                    <div>
                      <iframe src={db.files.getUrl(modal, media)} title="SS" />
                    </div>
                  {/each}
                </div>
              </div>
            </div>
          </div>
          <!-- 
        <p whitespace-pre-wrap>
          {JSON.stringify(modal, null, 2)}
        </p> -->
        </div>

        <div>
          <button btn="~ primary">
            <i
              class:i-bx-save={!$loading}
              class:i-bx-refresh={$loading}
              class:animate-spin={$loading}
            />
            {$t("save.btn")}
          </button>
        </div>
      </form>
    {/if}
  </div>
</div>

<div>
  <div sticky top-0 z-10 bg-base-a pt-15 pb-3>
    <div flex gap-5>
      <h1 text-xl>{$t("audit.indekskami.title")}</h1>
      <button
        on:click={refresh}
        btn="~ sm circle outline"
        aria-label="Refresh"
        p-.5
      >
        <i i-bx-refresh animate-reverse class:animate-spin={$loading} />
      </button>
    </div>
    <div>
      <div flex>
        <button btn="~ xs">{$t("all.info")}</button>
      </div>
    </div>
  </div>
  <div bg-base min-h-70vh relative>
    {#if $loading}
      <div
        absolute
        top-0
        z-20
        w-full
        h-2
        bg-neutral
        animate-pulse
        animate-count-infinite
      />
    {/if}
    <div>
      <table table w-full class:opacity-50={$loading}>
        <thead>
          <tr children-bg-base-b sticky top-0>
            <th sticky left-0 w-1 aria-label="Checkbox" h-15>
              <input
                type="checkbox"
                checkbox
                checked={selections.length == collections?.items.length}
                on:click={() =>
                  selections.length == collections?.items.length
                    ? (selections = [])
                    : (selections = collections?.items)}
              />
            </th>
            <th />
            <th>Ruang Lingkup</th>
            <th>Organisasi</th>
            <th>Auditee</th>
            <th>Auditor</th>
          </tr>
        </thead>
        <tbody>
          {#each collections?.items || [] as item}
            <tr>
              <td sticky left-0>
                <input
                  type="checkbox"
                  bind:group={selections}
                  checkbox
                  value={item}
                />
              </td>
              <td>
                <a href={"./detail?" + item.id} btn="~ sm">
                  <i i-bx-detail />
                </a>
              </td>
              <td>
                <div>{@html item.scope}</div>
              </td>
              <td>
                {item?.expand?.organization?.name}
              </td>
              <td>
                {#each item?.expand?.auditee || [] as auditee}
                  <div underline>
                    {auditee.name}
                  </div>
                {/each}
              </td>
              <td>
                {#each item?.expand?.auditor || [] as auditor}
                  <div underline>
                    {auditor.name}
                  </div>
                  <!-- {JSON.stringify(auditee)} -->
                {/each}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</div>
