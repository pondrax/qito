<script>
  import { PUBLIC_APP_NAME } from "$env/static/public";
  import { db } from "$lib/db";
  import { t } from "$lib/lang";

</script>

<div min-h-0 h-screen p-2>
  <div min-h-full bg-base-a p-5 rounded-box flex items-center>
    <div max-w-3xl m-auto>
      <h1 text-xl font-bold>{$t("home.welcome", { name: PUBLIC_APP_NAME })}</h1>
      <p py-3>{$t("home.naration")}</p>
      <a href="/auth" underline>{$t("sign.btn.in")}</a>

      <div whitespace-pre-wrap>
        {JSON.stringify(db.authStore.model, null, 2)}
      </div>

    </div>
  </div>
</div>
