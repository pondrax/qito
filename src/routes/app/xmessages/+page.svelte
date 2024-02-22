<script>
  import { db, submit } from "$lib/db";
  import { user } from "$lib/store";
  import { onDestroy, onMount } from "svelte";

  /**
   * @type {import("pocketbase").ListResult<import("pocketbase").RecordModel>}
   */
  let collections;
  onMount(async () => {
    await refresh();
    db.collection("messages").subscribe("*", () => {
      refresh();
    });
  });
  onDestroy(() => {
    db.collection("messages").unsubscribe("*");
  });

  async function refresh() {
    collections = await db.collection("messages").getList(1, 30, {
      expand: "owner,to",
      sort: "-created",
      requestKey: "refresh",
    });
  }
</script>

<div min-h-screen px-2>
  <div py-5>
    <h1 text-xl>Messages</h1>
  </div>
  <div min-h-80vh pb-20>
    <div grid gap-3>
      {#each collections?.items?.reverse() || [] as item}
        {#if $user?.id == item.owner}
          <div grid="~ cols-[1fr_auto]" gap-2 place-items-end>
            <div avatar w-10 rounded-full order-2>
              <img src="/avatar.png" alt="avatar" />
            </div>
            <div>
              <div chat-bubble bg-base-b break-all>
                {@html item.content}
              </div>
            </div>
          </div>
        {:else}
          <div grid="~ cols-[auto_1fr]" gap-2 place-items-start>
            <div avatar w-10 rounded-full>
              <img src="/avatar.png" alt="avatar" />
            </div>
            <div>
              <div chat-bubble bg-base-b break-all>
                {@html item.content}
              </div>
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </div>

  <div sticky bottom-5 left-0 right-0>
    <form
      action="?/messages"
      on:submit|preventDefault={submit}
      on:reset={() => {
        window.scrollTo(0, document.body.scrollHeight);
      }}
    >
      <input name="owner" type="hidden" value={$user?.id} />
      <div group-x-rounded>
        <!-- svelte-ignore a11y-autofocus -->
        <input name="content" input autofocus placeholder="Type message" autocomplete="off" />
        <button btn><i i-bx-send /></button>
      </div>
    </form>
  </div>
</div>
