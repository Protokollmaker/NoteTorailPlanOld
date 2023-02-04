<script>
  export let position;
  export let length;
  export let note;
  export let direction;
  let width = 0;
  let height = 0;
  if (direction == "vertical"){
    width = 2;
    height = length;
    position.x = position.x-1;
  }
  if (direction == "horizontal"){
    width = length;
    height = 2;
    position.y = position.y-1;
  }
</script>

<section>
 <div class="line"
    style="width: {width}px; height: {height}px;
          transform: translate({position.x}px,{position.y}px);"></div>
</section>

<style>
.line {
  position: absolute;
  background-color: var(--main-bg-color);
  
  border-radius: 30px;
}
</style>