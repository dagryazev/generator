<template lang="html">
  <div>
    <img :src="`data:image/png;base64,` + this.$store.state.canvas"  alt="" style="width: 100%;"/><br />
  </div>
</template>

<style lang="css">
</style>

<script>
export default {
  name: "canvasComponent"
}

</script>
