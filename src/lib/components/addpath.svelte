<script>
  export let position;
  export let add;
</script>

<section>
  <div class="plus">
    <div></div>
    <div></div>
  </div>
</section>

<style>
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
</style>