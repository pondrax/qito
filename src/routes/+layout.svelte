<script>
	import "uno.css";
	import "floeui/floe.css";

	import { PUBLIC_APP_NAME, PUBLIC_APP_VERSION } from "$env/static/public";
	import { page } from "$app/stores";
	import { fnTheme } from "floeui/dist/directives";
	import { locale, locales } from "$lib/lang";
	import { loading, pageLoading, toast } from "$lib/store";
	import { db } from "$lib/db";

  $effect(()=>{
    if(!db.authStore.isValid){

    }
    pageLoading.set(false);

  })

	/** @param {number} i */
	function removeToast(i) {
		$toast = $toast.filter((_, index) => index !== i);
	}
</script>

<svelte:head>
	<title>{PUBLIC_APP_NAME}</title>
</svelte:head>

<div bg-base>
	<slot />
	<div fixed z-50 top-5 right-5 flex gap-1>
		<div dropdown>
			<button btn="~ outline sm" uppercase>{$locale}</button>
			<ul menu bg-base rounded-box>
				{#each $locales as key}
					<li>
						<button on:click={() => ($locale = key)} uppercase>{key}</button>
					</li>
				{/each}
			</ul>
		</div>
		<div use:fnTheme={{ theme: "cupcake", pos: "end" }} />
	</div>
</div>

{#if $toast.length > 0 && $page.route.id != "/"}
	<div
		flex
		flex-col
		gap-3
		fixed
		bottom-5
		right-2
		p-2
		z-99
		max-h-screen
		overflow-y-auto
	>
		{#each $toast as alert, i}
			<div alert flex-nowrap border relative>
				<button
					btn="~ xs"
					absolute
					top--1
					right-1
					on:click={() => removeToast(i)}
				>
					&times;
				</button>
				{#if alert?.error}
					<i i-bx-x-circle text-error text-xl flex-shrink-0 />
					<div w-64 overflow-auto whitespace-pre-wrap>
						{JSON.stringify(alert.error, null, 2)}
					</div>
				{:else}
					<i i-bx-info-circle text-info text-xl flex-shrink-0 />
					<div w-50 overflow-auto>{alert.action}</div>
				{/if}
			</div>
		{/each}
	</div>
{/if}
