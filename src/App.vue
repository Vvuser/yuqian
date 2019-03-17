<template>
  <div>
    <navigation></navigation>
    <router-view></router-view>
    <footer-msg></footer-msg>
  </div>
</template>

<script>
import navigation from "@/components/navigation"
import footerMsg from "@/components/footerMsg"
export default {
  components: {
    footerMsg,
    navigation
  }
}
</script>

<style lang="scss">

</style>
