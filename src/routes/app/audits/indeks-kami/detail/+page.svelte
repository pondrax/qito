<script context="module">
  export const hidden = true;
</script>

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
  let auditId = "";
  /** @type {any} */
  let modal;
  /** @type {any} */
  let form;
  onMount(async () => {
    auditId = location.search.replace("?", "");
    // auditId = "fojf8eguh7na8et";
    await refresh();
  });

  async function refresh() {
    $loading = true;
    collections = await db.collection("auditsResult").getList(1, 500, {
      filter: `template.id="indeks_kami_4_2" && (audit.id = "${auditId}" || audit = "")`,
      // filter: `auditsDetails(question).score~"0"`,
      // filter: `auditsDetails(question).audit="fojf8eguh7na8et"`,
      // expand: "auditsDetails(question)",
      sort: "code",
      requestKey: "ikami",
    });
    setTimeout(() => ($loading = false), 500);
  }
  async function submit() {
    $loading = true;
    try {
      const data = {
        template: form.template,
        audit: auditId,
        question: form.id,
        answer: form.answer,
        score: form.score,
        media: form.file ? [...form.file] : undefined,
      };
      console.log(data, form);
      if (!form.aid) {
        await db.collection("auditsDetail").create(data);
      } else {
        await db.collection("auditsDetail").update(form.aid, data);
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
    {#if form}
      <form on:submit|preventDefault={submit}>
        <h1 text-lg mb-3>{form.question} ({form.score})</h1>
        <div h-80vh overflow-auto>
          <p pb-5>{form.hint}</p>
          <div grid grid-cols-1 gap-5>
            <div form-control max-w-full>
              <span>Opsi Penilaian</span>
              <div use:fnSelect={form.options}>
                <textarea
                  input
                  filter
                  placeholder="Pilih Opsi"
                  min-h-8
                  rounded-box
                />
                <input type="hidden" selected bind:value={form.score} />
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
                bind:value={form.answer}
                rows="3"
                h-auto
                rounded-box
              />
            </div>

            <div form-control max-w-full>
              <input type="file" input bind:files={form.file} multiple />
              <div>
                <div carousel w-full rounded-box min-h-40vh border>
                  {#each form.media as media}
                    <div>
                      <iframe src={db.files.getUrl(form, media)} title="SS" />
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
        <a href="../" btn="~ xs">{$t("all.list")}</a>
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
      <table table class:opacity-50={$loading}>
        <tbody>
        {#each collections?.items || [] as item}
          {#if item.meta?.title}

            <tr sticky top-30 bg-base-b h-20>
              <th>
                <div text-center>{item.code.split("..").at(0)}</div>
              </th>
              <th />
              <td>{item.question}</td>
              <th />
              <td />
            </tr>
          {:else}
            <tr>
              <td text-center>
                <div>{item.code}</div>
              </td>
              <td>
                {item.meta?.level || ""}
              </td>
              <td>
                <!-- {JSON.stringify(item, null, 2)} -->
                <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                <div tabindex="0" collapse collapse-arrow px-0>
                  <div collapse-title pr-2>
                    {item.question}
                  </div>
                  <div>
                    <p>{item.hint}</p>
                  </div>
                </div>
                <div pl-3 border-l-4 mb-3 whitespace-pre-wrap>
                  {@html item.answer}
                </div>
                <div flex flex-wrap gap-1>
                  <button btn="~ xs" on:click={() => {
                    form = item;
                    modal = true
                  }}>
                    <i i-bx-edit-alt />
                  </button>
                  {#if item.media.length > 0}
                    {#each item.media as media}
                      <div bg-base-a px-2 rounded-box>
                        {media.substr(0, media.lastIndexOf("_"))}
                      </div>
                    {/each}
                  {/if}
                </div>
              </td>
              <td>
                {item.score}
              </td>
              <td w-64>
                <!-- {JSON.stringify(item.options)} -->
                <div use:fnSelect={item.options}>
                  <textarea
                    input
                    filter
                    placeholder="Pilih Opsi"
                    min-h-8
                    rounded-box
                  />
                  <input type="hidden" selected bind:value={item.score} on:input={()=>{
                    form = item;
                    submit()
                  }}/>
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
              </td>
              <!-- <td>{JSON.stringify(item.options)}</td> -->
            </tr>
          {/if}
        {/each}
      </tbody>
      </table>
    </div>
  </div>
</div>
