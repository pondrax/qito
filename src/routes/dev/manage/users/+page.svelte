<script>
  import { db } from "$lib/db";
  import { t } from "$lib/lang";
  import { loading } from "$lib/store";
  import { onMount } from "svelte";

  /**
   * @type {string | any[]}
   */
  let selections = [];
  /**
   * @type {import("pocketbase").ListResult<import("pocketbase").RecordModel>}
   */
  let collections;

  onMount(async () => {
    await refresh();
    // console.log(collections);
  });

  async function refresh() {
    $loading = true;
    collections = await db.collection("users").getList();
    $loading = false;
  }
</script>

<div>
  <div py-5>
    <h1>{$t("users.title")}</h1>
    {$loading}
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
                checked={selections.length == collections?.totalItems}
                on:click={() =>
                  selections.length == collections?.totalItems
                    ? (selections = [])
                    : (selections = collections?.items)}
              />
            </th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Avatar</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {#each collections?.items || [] as row}
            <tr>
              <td sticky left-0>
                <input
                  type="checkbox"
                  bind:group={selections}
                  checkbox
                  value={row}
                />
              </td>
              <td>
                <div badge>{row.id}</div>
              </td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.avatar}</td>
              <td>{row.created}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</div>
