<template>
  <v-app id="lbg">
    <div>
      <v-card>
        <v-card-title>
          Login
        </v-card-title>
      </v-card>
    </div>
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss">
@media (min-width: 1024px) {
  #lbg {
    background: url(../assets/loginbg.png) no-repeat;
    background-size: cover;
    background-position: center;
  }
}
@media (max-width: 1024px) {
  #lbg {
    background: url(../assets/loginbg.png) no-repeat;
    background-size: cover;
    background-position: center;
  }
}
</style>
