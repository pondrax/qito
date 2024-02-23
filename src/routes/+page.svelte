<script>
  import { PUBLIC_APP_NAME } from "$env/static/public";
  import { db } from "$lib/db";
  import { t } from "$lib/lang";

  let loginUrl = $state()
  $effect(()=>{
    // login()
    loginUrl = db.authStore.model?'/app':'/auth';
  })
  async function login(){
    await db.collection("users").authWithOAuth2({
    provider:    "oidc",
    urlCallback: (url) => {
      loginUrl = url;
      // console.log(url)
        // open the url by some js method that is allowed
        // window.open(url, "_blank", "");
    },
})
  }
//   await pb.collection("users").authWithOAuth2({
//     provider:    "google",
//     urlCallback: (url) => {
//         // open the url by some js method that is allowed
//         window.open(url, "_blank", "");
//     },
// })
</script>

<div min-h-0 h-screen p-2>
  <div min-h-full bg-base-a p-5 rounded-box flex items-center>
    <div max-w-3xl m-auto>
      <h1 text-xl font-bold>{$t("home.welcome", { name: PUBLIC_APP_NAME })}</h1>
      <p py-3>{$t("home.naration")}</p>
      <a href={loginUrl} underline disabled={!loginUrl}>{$t("sign.btn.in")}</a>

      <div whitespace-pre-wrap>
        {JSON.stringify(db.authStore.model, null, 2)}
      </div>
      <!-- <a href={loginUrl}>test</a> -->
      <!-- {login()} -->
    </div>
  </div>
</div>
