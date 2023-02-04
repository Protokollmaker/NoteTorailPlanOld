<script>
	export let filled;
  export let textpos;
  export let text;
  export let position;

  let color = "#ffffff";
  if (filled)
    color = "#212121";
  position = {x: position.x-4, y: position.y-4};
  let text_width;
  let text_height;
  let textposition = {x: 0,y: 0};
  function settext(y, x){
    switch(textpos[0]) {
    case "top":
      textposition.y = -y/2-8;
      break;
    case "midd":
      textposition.y = -5;
      break;
    case "bottom":
      textposition.y = y/2;
      break;
    }
    switch(textpos[1]) {
    case "left":
      textposition.x = -x-4;
      break;
    case "center":
      textposition.x = -x/2+4.2;
      break;
    case "right":
      textposition.x = 12;
      break;
    }
  }
  $: settext(text_height, text_width);
  if (text == undefined) text = "";
</script>

<section style="transform: translate({position.x}px,{position.y}px);">
    <div  class="text" 
          style="transform: translate({textposition.x}px,{textposition.y}px);"
          bind:clientWidth={text_width} bind:clientHeight={text_height}>{text}</div>
    <div class="terminal" style="width: 8px;height: 8px;">
      <svg width="8" height="8">
        <circle cx="4" cy="4" r="3" stroke="#212121" stroke-width="2" fill="{color}" />
      </svg>
    <div>
</section>

<style>
section * {
  position: absolute;
  transform: translate(0px,0px);
}

section {
  padding: 0px;
  margin: 0px;
  width: fit-content;
  height: fit-content;
  text-align: center;
}

.terminal{
}

svg{
  transform: translate(-4px,0px);
}

.text {
  font-family: sans-serif;
  font-size: 15px;
}

</style>