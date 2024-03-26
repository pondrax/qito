<script>
  import { loading, toast } from "$lib/store";
  import { db } from "$lib/db";
  import { t } from "$lib/lang";
  import { fnSelect } from "$lib/ui/fnSelect";
  import { fnModal } from "floeui/dist/directives";
  import dayjs from "dayjs";

  /**
   * @param {any[]} xs
   * @param {{ (c: { status: any; }): any; (arg0: any): any; }} f
   */
  function groupBy(xs, f) {
    return xs.reduce(
      (r, v, i, a, k = f(v)) => ((r[k] || (r[k] = [])).push(v), r),
      {},
    );
  }

  let collections = $state();
  /**
   * @type {string | any[]}
   */
  let selections = [];
  let columns = [];
  let status = $state({
    error: 0,
    success: 0,
    total: 0,
  });
  let date = $state(dayjs().format("YYYY-MM-DD"));
  /**
   * @type {any}
   */
  let modal = $state();
  $effect(() => {
    refresh();
  });

  async function refresh() {
    $loading = true;
    collections = await db.collection("sitesAudit").getList(1, 500, {
      filter: [
        `created>="${date}"`,
        `created<"${dayjs(date).add(1, "day").format("YYYY-MM-DD")}"`,
      ].join("&&"),
      // filter: `template.id="indeks_kami_4_2"`,
      // filter: `auditsDetails(question).score~"0"`,
      // filter: `auditsDetails(question).audit="fojf8eguh7na8et"`,
      expand: "siteId,screenshot",
      sort: "@random",
      // requestKey: "ikami",
    });
    let x = groupBy(
      collections?.items || [],
      (/** @type {{ status: any; }} */ c) => c.status,
    );
    // console.log(collections?.items.length)
    status = {
      success: x.success?.length || 0,
      error: x.error?.length || 0,
      total: collections?.items?.length || 0,
    };
    // x.map(d=>console.log(d))
    // console.log(Object.keys(x).map((i) => (status[i] = x[i].length)));
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
  <div sticky top-0 z-10 bg-base-a pt-10 pb-3 mx--5 px-5>
    <div flex gap-5>
      <h1 text-xl>Sites Monitoring</h1>
      <!-- <h1 text-xl>{$t("audit.indekskami.title")}</h1> -->
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
        <a href="../" btn="~ xs">{$t("all.info")}</a>
      </div>
    </div>

    <div flex pt-5 gap-5 md:justify-between flex-wrap>
      <div whitespace-nowrap>
        <span btn="~ sm primary">Total : {status.total}</span>
        <span btn="~ sm success">Success : {status.success}</span>
        <span btn="~ sm error">Error : {status.error}</span>
      </div>
      <div group-x-rounded>
        <input input type="date" bind:value={date} w-48 />
        <button
          btn
          onclick={() =>
            (date = dayjs(date).add(-1, "day").format("YYYY-MM-DD"))}
        >
          <i i-bx-chevron-left />
        </button>
        <button
          btn
          onclick={() =>
            (date = dayjs(date).add(1, "day").format("YYYY-MM-DD"))}
        >
          <i i-bx-chevron-right />
        </button>
      </div>
    </div>
  </div>
  <div bg-base-a min-h-70vh sticky top-20>
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
    <div relative z-20 pt-5>
      <div grid grid-cols-1 md:grid-cols-3 gap-5>
        {#each collections?.items as item}
          <div card relative>
            <div absolute top-0 right-0>
              <span badge class:badge-success={item.status == "success"}>
                {item.status}
              </span>
            </div>
            <!-- {item?.expand?.screenshot?.media} -->
            <img
              src={db.getFileUrl(
                item?.expand?.screenshot,
                item?.expand?.screenshot?.media,
              )}
              alt="Album"
              rounded-xl
              min-h-48
            />
            <div important-px-2>
              <a
                href={"http://" + item?.expand?.siteId?.name}
                text-lg
                uppercase
                target="_blank"
              >
                {item?.expand?.siteId?.name?.replace(
                  ".mojokertokota.go.id",
                  "",
                )}
              </a>
              <!-- <h2 text-xl>{JSON.stringify(item)}</h2> -->
              <div>
                <span badge badge-primary>
                  {dayjs(item.created).format("YYYY-MM-DD hh:mm:ss")}
                </span>
              </div>
            </div>
          </div>
        {/each}
      </div>
      <!-- <table table w-full class:opacity-50={$loading}>
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
            <th/>
            <th>Name</th>
            <th>Organization</th>
            <th>Status</th>
            <th>Updated</th>
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
              </td>
              <td>
                <div>
                  <span badge class:badge-primary={item.secure}>{item.secure?'https':'http'}</span>
                  {item.name}
                </div>
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
                {item.updated}
              </td>
            </tr>
          {/each}
        </tbody>
      </table> -->
    </div>
  </div>
</div>
