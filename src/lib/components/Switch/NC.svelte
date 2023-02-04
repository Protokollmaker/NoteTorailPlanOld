<script>
  export let toggle = false;
  export let active = false;
  export let betätigungsweg = "none";
  if (betätigungsweg == "none" && active) {
    throw new Error("can't have a toggel in line when ther is no line (no actuation path)");
  }
</script>

<section>

</section>

<style>

</style>