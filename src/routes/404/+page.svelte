<svelte:head>
	<title>BUAIAN</title>
</svelte:head>
<div h-screen p-2>
	<div flex justify-center items-center h-full p-5 rounded-box bg-baseB>
		<!-- svelte-ignore illegal-attribute-character -->
		<div flex items-center text-base-content:80>
			<div flex>
				<i i-bx-sad text-7xl />
				<!-- <img src="/store/offline.png" alt="error" h-15> -->
			</div>
			<div border-r-5 h-25 mx-6 border-neutral:80 />
			<div>
				<div text-2xl>404</div>
				<div text-lg>Page Not Found</div>
				<div pt-5>
					<a href="/" btn="~ primary">
						<i i-bx-home /> Back Home
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
