<script>
	import welcome_fallback from '$lib/images/terminal.svg';
	const welcome_fallbackEncoded = `data:image/svg+xml,${encodeURIComponent(welcome_fallback)}`;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="line"></div>
	<div class="plus">
		<div></div>
		<div></div>
	</div>
	<svg width="10" height="10">
  <circle cx="4" cy="4" r="3" stroke="#000000" stroke-width="2" fill="#ffffff" />
	</svg>
</section>

<style>
.line {
	background-color: #212121;
	width: 100px;
	height: 4px;
	border-radius: 30px;
}
.plus {
	zoom: 0.7;
	background-color: #323232;
	height: 30px;
	width: 30px;
	border-radius: 5px;
}

.plus div {
	position: relative;
	background-color: #ffffff;
	height: 2px;
	width: 20px;
	border-radius: 10px;
}

.plus div:nth-child(1) {
  transform: translate(5px, 14px); /*6,5,13,5*/
}

.plus div:nth-child(2) {
  transform: translate(5px, 12px) rotate(90deg); /*6,5,13,5*/
}

svg {
	zoom: 1;
	height: 8px;
	width: 8px;
}
</style>
