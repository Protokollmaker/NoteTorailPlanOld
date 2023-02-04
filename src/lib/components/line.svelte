<script>
  import Addbutton from "$lib/components/addpath.svelte";
  export let position;
  export let length;
  export let note;
  export let direction;
  let positionCalebraton = position;
  let width = 0;
  let height = 0;
  let borderStyle = "";
  if (direction == "vertical"){
    width = 2;
    height = length;
    positionCalebraton.x = position.x-1;
  }
  if (direction == "horizontal"){
    width = length;
    height = 2;
    positionCalebraton.y = position.y-1;
  }
  let border = false;
  function handleClick() {
    if (border) {
      borderStyle = "";
      border = false
    }
    else {
      borderStyle = "background-color: #2980B9";
      border = true;
    }
	}
</script>

<section>
 <div class="line"
      style="width: {width}px; height: {height}px;
          transform: translate({positionCalebraton.x}px,{positionCalebraton.y}px);
          {borderStyle}"
      on:click={handleClick}></div>
  {#if border}
    <Addbutton position={{x: position.x, y: position.y}} direction="East"/>
  {/if}
</section>

<style>
.line {
  position: absolute;
  background-color: var(--main-bg-color);
  
  border-radius: 30px;
}
</style>