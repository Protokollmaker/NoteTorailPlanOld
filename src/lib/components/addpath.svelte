<script>
  export let position;
  export let add;
  export let direction;
  let positionbutton = {x: position.x-9,y: position.y-9};
  let positionline = {x: position.x,y: position.y};
  let path ={x: 1, y: 1};
  switch(direction) {
  case "North":
    positionbutton.y = position.y-9-25;
    positionline.y = position.y-25;
    path.x = 25;
    break;
  case "South":
    positionbutton.y = position.y-9+25;
    path.x = 25;
    break;
  case "West":
    positionbutton.x = position.x-9-25;
    positionline.x = position.x-25;
    path.y = 25;
    break;
  case "East":
    positionbutton.x = position.x-9+25;
    path.y = 25;
    break;
  }
</script>

<section>
  <div class="small_line" style="position: absolute;
  height: {path.x}px;
  width: {path.y}px;
  background-color: #303030;
  transform: translate({positionline.x+0.5}px,{positionline.y+0.5}px);"></div>
  <div class="plus" 
    style="transform: translate({positionbutton.x}px,{positionbutton.y}px);">
    <div></div>
    <div></div>
  </div>
</section>

<style>
section{
  position: absolute;
}

.plus {
  background-color: var(--main-bg-color);
  height: 20px;
  width: 20px;
  border-radius: 2.5px;
}

.plus div {
  position: relative;
  background-color: #ffffff;
  height: 1.5px;
  width: 15px;
  border-radius: 10px;
}

.plus div:nth-child(1) {
  transform: translate(2.5px, 9.25px); /*6,5,13,5*/
}

.plus div:nth-child(2) {
  transform: translate(2.5px, 8px) rotate(90deg); /*6,5,13,5*/
}
</style>