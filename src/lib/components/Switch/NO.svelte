<script>
  export let position;
  export let value;
  export let Bezeichnung;
  export let toggle = false;
  export let active = false;
  export let betätigungsweg = "none";
  export let Kontakbezeichnung = [13, 14];
  if (betätigungsweg == "none" && toggle) {
    throw new Error("can't have a toggel in line when ther is no line (no actuation path)");
  }
  value.push(2);
</script>

<section style="transform: translate({position.x-45.9}px, {position.y}px);">
  <div class="Schalter">
    <span class="Bezeichnung">{Bezeichnung}</span>
    {#if betätigungsweg != "none"}
      {#if betätigungsweg == "generall"}
        <span class="generall"></span>
      {/if}
      <span class="line"></span>
      {#if toggle}
        <span class="toggel">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="6" viewBox="0 0 15 6" fill="none">
            <g clip-path="url(#clip0_409_11)">
            <rect width="5" height="2" rx="1" fill="#212121"/>
            <rect x="6" y="4.3033" width="7.5" height="2" rx="1" transform="rotate(-45 6 4.3033)" fill="#212121"/>
            <rect x="3.41422" y="-1" width="7.5" height="2" rx="1" transform="rotate(45 3.41422 -1)" fill="#212121"/>
            <rect x="10" width="5" height="2" rx="1" fill="#212121"/>
          </svg>
        </span>
      {/if}
      <span class="line"></span>
    {/if}
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="30" viewBox="0 0 10 30" fill="none">
        <g clip-path="url(#clip0_408_6)">
        <path d="M8.06656 0H10.0666V5C10.0666 5.55228 9.61884 6 9.06656 6V6C8.51427 6 8.06656 5.55228 8.06656 5V0Z" fill="#212121"/>
        <path d="M8.06656 25C8.06656 24.4477 8.51427 24 9.06656 24V24C9.61884 24 10.0666 24.4477 10.0666 25V30H8.06656V25Z" fill="#212121"/>
        <rect x="0.214325" y="3.62" width="2" height="24" rx="1" transform="rotate(-20 0.214325 3.62)" fill="#212121"/>
        </g>
      </svg>
    <span class="Kontakbezeichnung Oben">{Kontakbezeichnung[0]}</span>
    <span class="Kontakbezeichnung Unten">{Kontakbezeichnung[1]}</span>
  </div>
</section>

<style>
section {
  position: absolute;
  width: fit-content;
}

.Schalter {
  margin: 0px 10px 0px 12px;
  height: 30px;
}

.line {
  display: inline-block;
  position: relative;
  transform: translate(0px, -14px);
  width: 5px;
  height: 2px;
  border-radius: 1px;
  background-color: #212121;
}

.generall {
  display: inline-block;
  position: relative;
  transform: translate(0px, -8px);
  width: 2px;
  height: 15px;
  border-radius: 1px;
  background-color: #212121;
}

.toggel svg {
  position: relative;
  transform: translate(0px, -10px);
}

.Kontakbezeichnung{
  font-size: 5px;
  margin: 0px;
}

.Oben {
  display: inline-block;
  position: absolute;
  transform: translate(2px, 0px);
  margin: 0px;
}

.Unten {
  display: inline-block;
  position: absolute;
  transform: translate(2px, 25px);
}

.Bezeichnung {
  display: inline-block;
  position: relative;
  transform: translate(-10px, -10px);
}
</style>