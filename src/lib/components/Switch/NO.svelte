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
</script>

<section style="transform: translate({position.x-45-50}px, {position.y}px);">
  <span class="name" contenteditable="true">{Bezeichnung}</span>
  <span class="Kontakbezeichnung oben">{Kontakbezeichnung[0]}</span>
  <span class="Kontakbezeichnung unten">{Kontakbezeichnung[1]}</span>
  <svg width="46" height="34" viewBox="0 0 46 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_415_126)">
    {#if betätigungsweg == "push" || betätigungsweg=="turn" || betätigungsweg=="pull" || betätigungsweg=="generall"}
      <rect x="8" y="15" width="5" height="2" rx="0.7" fill="#212121"/>
      <rect x="29" y="15" width="5" height="2" rx="0.7" fill="#212121"/>
    {/if}
    {#if betätigungsweg == "push" || betätigungsweg=="turn"}
      <rect x="3" y="7" width="5" height="2" rx="0.7" fill="#212121"/>
    {/if}
    {#if betätigungsweg == "pull" || betätigungsweg=="turn"}
      <rect y="24" width="5" height="2" rx="0.7" fill="#212121"/>
    {/if}
    {#if betätigungsweg == "push"}
      <rect x="3" y="24" width="5" height="2" rx="0.7" fill="#212121"/>
    {/if}
    {#if betätigungsweg == "pull"}
      <rect y="7" width="5" height="2" rx="0.7" fill="#212121"/>
    {/if}
    {#if betätigungsweg == "push" || betätigungsweg=="turn" || betätigungsweg=="pull" || betätigungsweg=="generall"}
      <rect x="3" y="26" width="19" height="2" rx="0.7" transform="rotate(-90 3 26)" fill="#212121"/>
    {/if}
    <g clip-path="url(#clip1_415_126)">
    <path d="M44 0H46V7.5C46 7.77614 45.7761 8 45.5 8H44.5C44.2239 8 44 7.77614 44 7.5V0Z" fill="#212121"/>
    <path d="M44 27C44 26.4477 44.4477 26 45 26V26C45.5523 26 46 26.4477 46 27V34H44V27Z" fill="#212121"/>
    <rect x="36.2143" y="5.62" width="2" height="24" rx="0.7" transform="rotate(-20 36.2143 5.62)" fill="#212121"/>
    {#if betätigungsweg == "endschalter"}
      <path d="M37.05 10.4255L37.8471 9.7566L38.2296 10.7243L40.5542 16.6062L42.253 20.9044L39.2822 17.3639L35.4255 12.7677L34.9434 12.1931L35.5179 11.711L37.05 10.4255Z" stroke="#212121" stroke-width="1.5" stroke-miterlimit="16"/>
    {/if}
    </g>
    {#if betätigungsweg != "none" && betätigungsweg != "endschalter" && toggle}
      <g clip-path="url(#clip2_415_126)">
      <rect x="20.2039" y="19.0994" width="7.21161" height="2" rx="1" transform="rotate(-45 20.2039 19.0994)" fill="#212121"/>
      <rect x="17.91" y="14" width="7.19937" height="2" rx="1" transform="rotate(45 17.91 14)" fill="#212121"/>
      <rect x="24" y="15" width="3" height="2" rx="0.7" fill="#212121"/>
      <rect x="16" y="15" width="3" height="2" rx="0.7" fill="#212121"/>
      </g>
    {/if}
    {#if betätigungsweg != "none" && betätigungsweg != "endschalter" && !toggle}
    <path d="M22.5603 12.0244L18.21 13.6227C16.4629 14.2646 16.4629 16.7354 18.21 17.3773L22.5603 18.9756C23.8657 19.4553 25.25 18.4891 25.25 17.0983V13.9017C25.25 12.5109 23.8657 11.5447 22.5603 12.0244Z" stroke="#212121" stroke-width="2"/>
    {/if}
    </g>
    <defs>
    <clipPath id="clip0_415_126">
    <rect width="46" height="34" fill="white"/>
    </clipPath>
    <clipPath id="clip1_415_126">
    <rect width="13" height="34" fill="white" transform="translate(33)"/>
    </clipPath>
    <clipPath id="clip2_415_126">
    <rect width="11" height="6" fill="white" transform="translate(16 15)"/>
    </clipPath>
    </defs>
  </svg>


</section>

<style>
section {
  position: absolute;
  width: fit-content;
  /*top, rechts, unten, links*/
  margin: 0px 10px 0px 50px;
}

span {
  position: absolute;
}

.name{
  /*all: unset;*/
  outline: 0px solid transparent;
  transform: translate(-37px, 8px);
}

.Kontakbezeichnung {
  font-size: 5px;
}

.oben {
  transform: translate(46px, 0px);
}

.unten {
  transform: translate(46px, 28px);
}
</style>