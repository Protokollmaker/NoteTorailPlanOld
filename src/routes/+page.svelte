<script>
  import Terminal from '$lib/components/terminal.svelte';
	import Line from '$lib/components/line.svelte';
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <div class="canvas">
		<Line     position={{x: 10, y: 50}} length=140 direction="horizontal" note=1/>
		<Line     position={{x: 60, y: 50}} length=50 direction="vertical" note=1/>
		<Terminal position={{x: 60, y: 80}}  filled={false} textpos={["midd", "left"]} text={"XD1:10"} />
    <Terminal position={{x: 60, y: 50}}  filled={false} textpos={["bottom", "left"]} text={"XD1:1"} />
		<Terminal position={{x: 150, y: 50}} filled={true} textpos={["top", "center"]} />
  </div>
</section>

<style>
.canvas {
  height: 1000px;
  width: 1000px;
}

.canvas {
	background-color: #f0f0f0;
}
</style>