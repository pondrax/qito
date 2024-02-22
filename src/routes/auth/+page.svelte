<script>
  import { goto } from "$app/navigation";
  import { auth } from "$lib/db";
  import { t } from "$lib/lang";
  import { toast } from "$lib/store";
  import { onMount } from "svelte";

  export let data;
  let authProviders = data.authProviders;

  /**
   * @param {SubmitEvent} event
   */
  async function submitLogin({ target }) {
    if (target instanceof HTMLFormElement) {
      const form = new FormData(target);
      let authResponse;
      // console.log(form, target);
      if (form.get("provider")) {
        authResponse = await auth.provider(String(form.get("provider")));
      } else {
        authResponse = await auth.login(
          String(form.get("email")),
          String(form.get("password"))
        );
      }

      if (!authResponse) {
        $toast = [{ error: $t("sign.failed") }];
      } else {
        $toast = [{ action: $t("sign.success") }];
        goto("/app");
      }
    }
  }
</script>

<div h-screen p-2>
  <div bg-base-a rounded-box flex justify-center items-center h-full>
    <div max-w-100 w-full p-5 bg-base rounded-box shadow>
      <div
        avatar
        w-24
        h-24
        top--10
        rounded-3xl
        bg-base-a
        ring="2 stone offset-2"
      >
        <img src="/favicon.png" alt="favicon" />
      </div>
      <div>{$t("sign.title")}</div>
      <form method="post" on:submit|preventDefault={submitLogin}>
        <div form-control>
          <span>{$t("userOrEmail.label")}</span>
          <!-- svelte-ignore a11y-autofocus -->
          <input
            input
            name="email"
            placeholder={$t("userOrEmail.placeholder")}
            autocomplete="off"
            autofocus
            required
          />
        </div>
        <div form-control>
          <span>{$t("password.label")}</span>
          <input
            input
            type="password"
            name="password"
            placeholder={$t("password.placeholder")}
            required
          />
        </div>
        <button btn="~ secondary" mt-3 w-full>{$t("sign.btn.in")}</button>
      </form>

      <div text-center my-5 border-y-2 h-1 />

      <div>
        {#each authProviders as method}
          <form method="post" on:submit|preventDefault={submitLogin}>
            <input type="hidden" name="provider" value={method.name} />
            <button btn="~ outline" w-full flex h-auto justify-start gap-5>
              <img src={`/oauth/${method.name}.svg`} alt="provider" h-8 p-1 />
              {$t("sign.with")}
              {method.name}
            </button>
          </form>
        {/each}
      </div>

      <div mt-10 text-center>
        <a href="/" btn="~ outline"><i i-bx-home-alt /> {$t("back.home")} </a>
      </div>
    </div>
  </div>
</div>
