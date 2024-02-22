<script>
  import { page } from "$app/stores";
  import { t } from "$lib/lang";
</script>

<div flex items-center justify-center h-screen>
  <div>
    <div text-xl>
      {$page.status}
      |
      {$page.error?.message}
    </div>
    <div mt-5 mb--10 text-center>
      <a href="/" btn="~ outline"><i i-bx-home-alt /> {$t("back.home")} </a>
    </div>
  </div>
</div>
