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
      <v-row>
        <v-col>
          <div id="vlogo" flat>
            <img
              src="https://valahealth.com/img/vala-logo.svg"
              width="300"
              height="100"
            />
          </div>
        </v-col>
        <v-col>
          <div id="legal">
            <b> Legal</b> <br />
            <br />
            Prescription policy <br />
            Registration & regulation <br />
            Privacy policy <br />
            Data protection
          </div>
        </v-col>
        <v-col>
          <div id="regu">
            <v-row><b>Regulated by</b></v-row>

            <v-row
              ><img
                id="fimg1"
                src="https://valahealth.com/img/social-icons/gmc.svg "
                width="200"
                height="50"
            /></v-row>
            <v-row
              ><img
                id="fimg2"
                src="https://valahealth.com/img/social-icons/cqc.svg"
                width="200"
                height="50"
            /></v-row>
          </div> </v-col></v-row
    ></v-footer>
  </v-app>
</template>

<script>
import Vue from "vue";
import VueKinesis from "vue-kinesis";

Vue.use(VueKinesis);
export default {};
</script>

<style lang="scss">
* {
  font-family: "Raleway", sans-serif;
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

  .fot {
    width: 100vw;
    height: auto;
  }

  #vlogo {
    height: auto;
    margin-top: 8%;
    margin-left: 20%;
  }
  #legal {
    margin-top: 3%;
    height: auto;
    font-size: 0.9em;
    text-align: left;
    margin-left: 20%;
  }
  #regu {
    margin-top: 3%;
    height: auto;
    margin-left: 20%;
    #fimg1 {
      margin-top: 5%;
      margin-right: 90%;
    }
    #fimg2 {
      margin-top: 3%;
      margin-right: 90%;
    }
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
  .fot {
    width: 100vw;
    height: auto;
  }

  #vlogo {
    height: auto;
    margin-top: 5%;
    margin-left: 5%;
  }
  #legal {
    height: auto;
    font-size: 0.9em;
    text-align: left;
    margin-left: 20%;
  }
  #regu {
    height: auto;
    margin-left: 20%;
    margin-right: 20%;
    #fimg1 {
      margin-top: 20%;
    }
    #fimg2 {
      margin-top: 10%;
    }
  }
}
</style>
