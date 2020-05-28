<template>
  <v-app>
    <v-app-bar class="header" color="white" app flat>
      <div id="nav-left"></div>
      <div id="nav-center">
        <router-link class="routerLink" to="/">
          <img src="https://valahealth.com/img/vala-logo.svg" width="100" />
        </router-link>
      </div>
      <div id="nav-right">
        <router-link class="routerLink" to="/login">
          <v-btn id="loginbtn" depressed>
            Logout
          </v-btn>
        </router-link>
      </div>
    </v-app-bar>

    <router-view />

    <v-footer class="fot" id="foot">
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>

<script>
import Vue from 'vue';
import VueKinesis from 'vue-kinesis';

Vue.use(VueKinesis);
export default {};
</script>

<style lang="scss">
* {
  font-family: 'Raleway', sans-serif;
}

#nav-left {
  display: flex;
  justify-content: flex-start;
  width: 100%;
}

#nav-center {
  display: flex;
  justify-content: center;
  width: 100%;
}

#nav-right {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

@media (min-width: 1024px) {
  .header {
    z-index: 1000;
    background-color: white;
    border-bottom: 1px solid #dcdfdf !important;
  }
  .v-app-bar.v-app-bar--fixed,
  .theme--light.v-app-bar.v-toolbar.v-sheet,
  .theme--light.v-toolbar.v-sheet {
    border-bottom: 1px solid #dcdfdf !important;
  }

  .routerLink {
    text-decoration: none;
    #loginbtn {
      @include Txtbtn(Raleway);
      overflow-y: none;
      font-weight: 500;
      background-color: #fff;
      border-radius: 100px;
      color: #48a0f7;
      border: 2px solid;
      font-size: 15px;
      padding: 9px 25px;
      text-transform: capitalize;
    }
  }

  #loginbtn:hover {
    transition: all 0.2s ease;
    border-color: #48a0f7;
    color: white;
    @include txtColor(map-get($colorz, white));
    background-image: linear-gradient(
      -120deg,
      #4ceae7,
      #23bcd6 50%,
      #0298c8 95%,
      #0298c8
    );
  }
}

@media (max-width: 1024px) {
  .header {
    z-index: 1000;
    background-color: white;
    border-bottom: 1px solid #dcdfdf !important;
  }
  .v-app-bar.v-app-bar--fixed,
  .theme--light.v-app-bar.v-toolbar.v-sheet,
  .theme--light.v-toolbar.v-sheet {
    border-bottom: 1px solid #dcdfdf !important;
  }

  .routerLink {
    text-decoration: none;
    #loginbtn {
      @include Txtbtn(Raleway);
      overflow-y: none;
      font-weight: 500;
      background-color: #fff;
      border-radius: 100px;
      color: #48a0f7;
      border: 2px solid;
      font-size: 15px;
      padding: 9px 25px;
      text-transform: capitalize;
    }
  }

  #loginbtn:hover {
    transition: all 0.2s ease;
    border-color: #48a0f7;
    color: white;
    @include txtColor(map-get($colorz, white));
    background-image: linear-gradient(
      -120deg,
      #4ceae7,
      #23bcd6 50%,
      #0298c8 95%,
      #0298c8
    );
  }
}
</style>
