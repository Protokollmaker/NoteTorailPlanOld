<script>
  export let position;
  export let value;
  export let Bezeichnung;
  export let toggle = false;
  export let active = false;
  export let betätigungsweg = "none";
  export const Kontakbezeichnung = [21, 22];
  if (betätigungsweg == "none" && toggle) {
    throw new Error("can't have a toggel in line when ther is no line (no actuation path)");
  }
</script>

<section style="transform: translate({position.x-92}px, {position.y}px);">
  <span class="name" contenteditable="true">{Bezeichnung}</span>
  <span class="Kontakbezeichnung oben">{Kontakbezeichnung[0]}</span>
  <span class="Kontakbezeichnung unten">{Kontakbezeichnung[1]}</span>
  <svg width="52" height="34" viewBox="0 0 52 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_412_103)">
    <g clip-path="url(#clip1_412_103)">
    <path d="M41 0H43V7.5C43 7.77614 42.7761 8 42.5 8H41.5C41.2239 8 41 7.77614 41 7.5V0Z" fill="#212121"/>
    <rect x="41" y="8" width="2" height="11" rx="0.7" transform="rotate(-90 41 8)" fill="#212121"/>
    <path d="M41 28.4815C41 27.6633 41.6633 27 42.4815 27V27C42.7679 27 43 27.2321 43 27.5185V34H41V28.4815Z" fill="#212121"/>
    <rect x="50" y="3" width="2" height="28.0004" rx="0.7" transform="rotate(20 50 3)" fill="#212121"/>
    </g>
    {#if betätigungsweg == "endschalter"}
      <path d="M46 10.25H47.0406L46.7115 11.2372L44.7115 17.2372L43.25 21.6217V17V11V10.25H44H46Z" stroke="#212121" stroke-width="1.5" stroke-miterlimit="16"/>
    {/if}
    {#if betätigungsweg == "push" || betätigungsweg=="turn" || betätigungsweg=="pull" || betätigungsweg=="generall"}
    <rect x="9" y="27" width="19" height="2" rx="0.7" transform="rotate(-90 9 27)" fill="#212121"/>
    {/if}
    {#if (betätigungsweg != "none" && !toggle)} <!--Button arror-->
      <path d="M28.5603 14.0244L24.21 15.6227C22.4629 16.2646 22.4629 18.7354 24.21 19.3773L28.5603 20.9756C29.8657 21.4553 31.25 20.4891 31.25 19.0983V15.9017C31.25 14.5109 29.8657 13.5447 28.5603 14.0244Z" stroke="#212121" stroke-width="2"/>
    {/if}
    {#if betätigungsweg == "pull" }
      <rect x="6" y="8" width="5" height="2" rx="0.7" fill="#212121"/>
    {/if}
    {#if (betätigungsweg == "push" || betätigungsweg=="turn")}
      <rect x="9" y="8" width="5" height="2" rx="0.7" fill="#212121"/>
    {/if}
    {#if (betätigungsweg == "pull" || betätigungsweg=="turn")}
      <rect x="6" y="25" width="5" height="2" rx="0.7" fill="#212121"/>
    {/if}
    {#if betätigungsweg == "push"}
    <rect x="9" y="25" width="5" height="2" rx="0.7" fill="#212121"/>
    {/if}
    {#if betätigungsweg == "push" || betätigungsweg=="turn" || betätigungsweg=="pull" || betätigungsweg=="generall" || betätigungsweg == "notaus"}
      <rect x="36" y="16" width="5" height="2" rx="0.7" fill="#212121"/>
      <rect x="14" y="16" width="5" height="2" rx="0.7" fill="#212121"/>
    {/if}
    {#if betätigungsweg != "none" && betätigungsweg != "endschalter" && toggle} <!--Toggle arror-->
    <g clip-path="url(#clip2_412_103)">
      <rect x="26.2039" y="20.0994" width="7.21161" height="2" rx="1" transform="rotate(-45 26.2039 20.0994)" fill="#212121"/>
      <rect x="23.91" y="15" width="7.19937" height="2" rx="1" transform="rotate(45 23.91 15)" fill="#212121"/>
      <rect x="30" y="16" width="3" height="2" rx="0.7" fill="#212121"/>
      <rect x="22" y="16" width="3" height="2" rx="0.7" fill="#212121"/>
    </g>
    {/if}
    <mask id="path-18-outside-1_412_103" maskUnits="userSpaceOnUse" x="1" y="9" width="11" height="17" fill="black">
    <rect fill="white" x="1" y="9" width="11" height="17"/>
    <path d="M9.5 11.7C9.5 11.3134 9.18571 10.9961 8.80135 11.0377C8.18755 11.104 7.58513 11.2576 7.01256 11.4948C6.22394 11.8214 5.50739 12.3002 4.90381 12.9038C4.30023 13.5074 3.82144 14.2239 3.49478 15.0126C3.16813 15.8012 3 16.6464 3 17.5C3 18.3536 3.16813 19.1988 3.49478 19.9874C3.82144 20.7761 4.30023 21.4926 4.90381 22.0962C5.50739 22.6998 6.22394 23.1786 7.01256 23.5052C7.58513 23.7424 8.18755 23.896 8.80135 23.9623C9.18571 24.0039 9.5 23.6866 9.5 23.3L9.5 17.5V11.7Z"/>
    </mask>
    {#if (betätigungsweg == "notaus")} 
      <path d="M9.5 11.7C9.5 11.3134 9.18571 10.9961 8.80135 11.0377C8.18755 11.104 7.58513 11.2576 7.01256 11.4948C6.22394 11.8214 5.50739 12.3002 4.90381 12.9038C4.30023 13.5074 3.82144 14.2239 3.49478 15.0126C3.16813 15.8012 3 16.6464 3 17.5C3 18.3536 3.16813 19.1988 3.49478 19.9874C3.82144 20.7761 4.30023 21.4926 4.90381 22.0962C5.50739 22.6998 6.22394 23.1786 7.01256 23.5052C7.58513 23.7424 8.18755 23.896 8.80135 23.9623C9.18571 24.0039 9.5 23.6866 9.5 23.3L9.5 17.5V11.7Z" stroke="#212121" stroke-width="4" mask="url(#path-18-outside-1_412_103)"/>
    {/if}
    <defs>
    <clipPath id="clip0_412_103">
    <rect width="52" height="34" fill="white"/>
    </clipPath>
    <clipPath id="clip1_412_103">
    <rect width="12" height="34" fill="white" transform="translate(41)"/>
    </clipPath>
    <clipPath id="clip2_412_103">
    <rect width="11" height="6" fill="white" transform="translate(22 16)"/>
    </clipPath>
    </defs>
  </svg>

</section>

<style>
section {
  /*top, rechts, unten, links*/
  margin: 0px 10px 0px 50px;
  height: 34px;
  width: fit-content;
}
span {
  position: absolute;
}
.name{
  /*all: unset;*/
  outline: 0px solid transparent;
  transform: translate(-40px, 8px);
}

.Kontakbezeichnung {
  font-size: 5px;
}

.oben {
  transform: translate(43px, 0px);
}

.unten {
  transform: translate(43px, 28px);
}
</style>