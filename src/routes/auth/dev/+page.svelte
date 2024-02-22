<script>
  import { goto } from "$app/navigation";
  import { db } from "$lib/db";
  import { t } from "$lib/lang";
  import { toast } from "$lib/store";

  /**
   * @param {SubmitEvent} event
   */
  async function submitLogin({ target }) {
    if (target instanceof HTMLFormElement) {
      const form = new FormData(target);
      let error;
      let authResponse = await db.admins
        .authWithPassword(
          String(form.get("email")),
          String(form.get("password"))
        )
        .catch((e) => {
          error = Object.keys(e.data.data).length > 0 ? e.data.data : e.message;
        });

      if (!authResponse) {
        $toast = [{ error: error }];
      } else {
        $toast = [{ action: $t("sign.success") }];
        goto("/dev");
      }
    }
  }
</script>

<div h-screen p-2 bg-neutral>
  <div rounded-box flex justify-center items-center h-full>
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
      <div>{$t("sign.titleAdmin")}</div>
      <form method="post" on:submit|preventDefault={submitLogin}>
        <div form-control>
          <span>{$t("email.label")}</span>
          <!-- svelte-ignore a11y-autofocus -->
          <input
            input
            name="email"
            placeholder={$t("email.placeholder")}
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

      <div mt-10 text-center>
        <a href="/" btn="~ outline"><i i-bx-home-alt /> {$t("back.home")} </a>
      </div>
    </div>
  </div>
</div>
