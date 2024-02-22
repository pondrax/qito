<script>
  import { db } from "$lib/db";
  import { t } from "$lib/lang";
  import { loading } from "$lib/store";
  import { onMount } from "svelte";
  import dayjs from "dayjs";
  /**
   * @type {string | any[]}
   */
  let selections = [];
  /**
   * @type {import("pocketbase").ListResult<import("pocketbase").LogRequestModel>}
   */
  let collections;

  onMount(async () => {
    await refresh();
    // console.log(collections);
  });

  async function refresh() {
    $loading = true;
    collections = await db.logs.getRequestsList(undefined, undefined, {
      filter: `auth != "admin"`,
      sort: "-created",
    });
    console.log(collections);
    setTimeout(() => {
      $loading = false;
    }, 300);
  }
  async function loadMore() {
    const more = await db.logs.getRequestsList(
      collections.page + 1,
      undefined,
      {
        filter: `auth != "admin"`,
        sort: "-created",
      }
    );
    collections = {
      ...more,
      items: [...collections.items, ...more.items],
    };
  }
</script>

<div>
  <div py-5>
    <div flex gap-1>
      <h1 text-xl>{$t("logs.title")}</h1>
      <button btn="~ outline circle" p-1 on:click={refresh}>
        <i i-bx-refresh animate-reverse class:animate-spin={$loading} />
      </button>
    </div>
    {collections?.totalItems}
  </div>
  <div bg-base rounded-box>
    <div overflow-x-auto min-h-50vh>
      <table table w-full class={$loading ? "opacity-50" : ""}>
        <thead>
          <tr children-bg-base-b>
            <th sticky left-0 rounded-tl-xl w-1 aria-label="Checkbox">
              <input
                type="checkbox"
                checkbox
                checked={selections.length == collections?.items?.length}
                on:click={() =>
                  selections.length == collections?.items?.length
                    ? (selections = [])
                    : (selections = collections?.items)}
              />
            </th>
            <th>Method</th>
            <th>Url</th>
            <th>Referer</th>
            <th>User Ip</th>
            <th>Status</th>
            <th rounded-tr-xl>Created</th>
          </tr>
        </thead>
        <tbody>
          {#each collections?.items || [] as row}
            <tr>
              <th sticky left-0 bg-base>
                <input
                  type="checkbox"
                  bind:group={selections}
                  checkbox
                  value={row}
                />
              </th>
              <td>
                <div
                  badge
                  class:badge-success={row.method == "POST"}
                  class:badge-info={row.method == "GET"}
                >
                  {row.method}
                </div>
              </td>
              <td>{row.url}</td>
              <td>{row.referer}</td>
              <td>{row.remoteIp}</td>
              <td>
                <div badge class:badge-error={row.status == 400}>
                  {row.status}
                </div>
              </td>
              <td whitespace-pre-wrap>
                {dayjs(row.created).format("YYYY-MM-DD\nHH:mm:ss")}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
      <button on:click={loadMore}>Load More</button>
    </div>
  </div>
</div>
