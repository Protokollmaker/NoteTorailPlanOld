<script>
  import Terminal from '$lib/components/terminal.svelte';
	import Line from '$lib/components/line.svelte';
	import Addbutton from "$lib/components/addpath.svelte";
  import NormalyOpen from "$lib/components/Switch/NO.svelte";
  import NormalyClosed from "$lib/components/Switch/NC.svelte";
  let test = [];
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section >
  {test}
  <div class="canvas">
		<!--<Line     position={{x: 10, y: 50}} length=140 direction="horizontal" note=1/>
		<Line     position={{x: 60, y: 50}} length=50 direction="vertical" note=1/>
		<Terminal position={{x: 60, y: 80}}  filled={false} textpos={["midd", "left"]} text={"XD1:10"} />
    <Terminal position={{x: 60, y: 50}}  filled={false} textpos={["bottom", "left"]} text={"XD1:1"} />
		<Terminal position={{x: 150, y: 50}} filled={true} textpos={["top", "center"]} />
    <NormalyOpen position={{x:120, y:200}} betätigungsweg="generall" toggle={false} Bezeichnung="SF1" bind:value="{test}"/>
    <NormalyOpen position={{x:120, y:300}} betätigungsweg="generall" toggle={true} Bezeichnung="SF4" bind:value="{test}"/>
    <NormalyOpen position={{x:120, y:120}} betätigungsweg="none" Bezeichnung="Q1" bind:value="{test}"/>-->
    <Line     position={{x: 120, y: 0}} length=120 direction="vertical" note=1/>
    <NormalyClosed position={{x:120, y:120}} betätigungsweg="notaus" Bezeichnung="Q1" bind:value="{test}"/>
  </div>
</section>

<style>
.canvas {
  height: 1000px;
  width: 1000px;
}

.point {
  height: 2px;
  width: 2px;
  background-color: #55555555;
  position: absolute;
  transform: translate(120px, 120px);
}

.canvas {
	background-color: #f0f0f0;
}
</style>