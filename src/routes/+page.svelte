<script>
  import Terminal from '$lib/components/terminal.svelte';
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
  <div class="canvas">
    <Terminal filled={false} textpos={["top", "right"]} text={"XD1:1"} position={{x: 50, y: 50}}/>
		<Terminal filled={false} textpos={["midd", "right"]} text={"XD1:213"} position={{x: 150, y: 50}}/>
		<Terminal filled={false} textpos={["bottom", "right"]} text={"XD1:3242"} position={{x: 250, y: 50}}/>
  </div>
  <!--<Terminal filled={false} textpos={["top", "center"]} text={"XD2:23"}/>-->
</section>

<style>
.line {
  background-color: var(--main-bg-color);
  width: 100px;
  height: 2px;
  border-radius: 30px;
}
.plus {
  zoom: 0.7;
  background-color: var(--main-bg-color);
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

.canvas {
  height: 1000px;
  width: 1000px;
}

.canvas {
	background-color: #f0f0f0;
}
</style>