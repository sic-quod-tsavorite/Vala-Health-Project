<template>
  <v-app id="lbg">
    <v-app-bar class="header" color="white" app flat>
      <v-spacer></v-spacer>
      <div class="d-flex-shrink-1">
        <router-link class="routerLink" to="/">
          <img src="https://valahealth.com/img/vala-logo.svg" width="100" />
        </router-link>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>
    <div>
      <v-card id="">
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
