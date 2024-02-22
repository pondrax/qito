<script>
  import { PUBLIC_APP_NAME, PUBLIC_APP_VERSION } from "$env/static/public";
  import { auth, db } from "$lib/db";
  import { t } from "$lib/lang";
  import { user, pageLoading } from "$lib/store";

  export let data;

  let open = false;

  function openDrawer() {
    open = !open;
  }
</script>

{#if $pageLoading}
  <div h-screen flex justify-center items-center>
    <div>
      <div flex text-4xl justify-center><i i-bx-loader-alt animate-spin /></div>
      <div>{$t("loading")}</div>
    </div>
  </div>
{:else}
  <div drawer bg-base min-h-screen w-full>
    {#if open}
      <button
        overlay
        opacity-80
        fixed
        top-0
        bottom-0
        left-0
        right-0
        bg-neutral
        z-50
        transition-all
        on:click={() => (open = false)}
      />
    {/if}
    <div
      drawer-side
      lg-drawer-open
      class:drawer-open={open}
      lg-sticky
      fixed
      w-72
      h-screen
      top-0
      bg-base
    >
      <!-- Sidebar content here -->
      <div flex flex-col items-center>
        <div avatar w-32 rounded-full ring="4 rainbow offset-4" mt-15>
          <img
            src={$user?.avatar || "/avatar.png"}
            referrerpolicy="no-referrer"
            alt="img"
            rounded-full
          />
        </div>
        <div py-2 text-center>
          <div text-sm font-bold>{$user?.email}</div>
          <div>
            <div text-sm>ADMIN</div>
          </div>
        </div>
        <div group-x-rounded>
          <a href="/" btn="~ sm secondary"><i i-bx-home /> {$t("home.btn")}</a>
          <a href="/" btn="~ sm" on:click={auth.logout}>
            <i i-bx-log-out />
            {$t("sign.btn.out")}
          </a>
        </div>
      </div>
      <ul menu p-4 children-children="py-3 gap-2">
        <li />
        {#each data.pages as page}
          <li><a href={"/dev" + page}>{page}</a></li>
        {/each}
        <li />
        <li><a href="/dev/profile"><i i-bx-smile /> {$t("profile")}</a></li>
        <li />
      </ul>
      <div mt-auto flex px-6 py-3 items-end>
        <img src="/favicon.png" alt="icon" h-12 />
        <div text-sm text-center grow>
          {PUBLIC_APP_NAME} v{PUBLIC_APP_VERSION} <br />
          &copy; Copyright 2023
        </div>
      </div>
    </div>
    <div drawer-content p-2 min-w-0 min-h-screen w-full>
      <!-- Page content here -->
      <div bg-base-a min-h-screen rounded-box p-3 class="svg-app">
        <div mb-10 fixed top-5 z-50 left-5>
          <button btn="~ sm" on:click={openDrawer} lg-hidden>
            <i i-bx-menu />
          </button>
        </div>
        <div py-10 lg-px-5>
          <!-- {$t("intro")} -->
          <!-- {JSON.stringify(db.authStore.model)} -->
          <slot />

          <!-- <div whitespace-pre-wrap>
            {JSON.stringify(data, null, 2)}
          </div> -->
        </div>
      </div>
    </div>
  </div>
{/if}
