<template>
  <v-app id="tbg">
    <v-app-bar class="header" color="white" app flat>
      <v-spacer></v-spacer>
      <div class="d-flex-shrink-1">
        <router-link class="routerLink" to="/">
          <img src="https://valahealth.com/img/vala-logo.svg" width="100" />
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <router-link class="routerLink" to="/">
        <v-btn id="loginbtn">
          Logout
        </v-btn></router-link
      >
    </v-app-bar>

    <v-card id="tcard">
      <p id="t1">
        Thank you for choosing Vala.
      </p>
      <br />
      <br />
      <p id="t2">
        An E-mail will be sent to you with further information.
      </p>
    </v-card>

    <v-row id="tRow">
      <router-link class="routerLink" to="/mypage">
        <v-btn rounded id="tReturn">Return</v-btn>
      </router-link></v-row
    >
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  font-family: "Raleway", sans-serif;
}

@media (min-width: 1025px) {
  #tbg {
    @include bgiColor(map-get($colorz, lg3));
    height: 80vh;
  }
  #tcard {
    width: 60vw;
    height: 30vh;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
    #t1 {
      display: flex;
      justify-content: center;
      margin-top: 5%;
      font-weight: bold;
    }
    #t2 {
      display: flex;
      justify-content: center;
      margin-top: 10px;
    }
  }
  #tRow {
    display: flex;
    margin: auto;
    margin-bottom: 0;
    #tReturn {
      font-weight: 500;
      font-size: 1.2em;
      padding: 9px 25px;
      text-transform: capitalize;
      margin-top: 50px;

      color: white;
      border: 2px solid white;
      font-size: 15px;
      padding: 9px 25px;
      text-transform: capitalize;
      background-image: linear-gradient(
        -120deg,
        #4ceae7,
        #23bcd6 50%,
        #0298c8 95%,
        #0298c8
      );
    }
  }
}
@media (max-width: 1024px) {
  #tbg {
    @include bgiColor(map-get($colorz, lg3));
    height: 60vh;
  }
  #tcard {
    width: 90vw;
    height: 25vh;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20%;
    text-align: center;
    #t1 {
      display: flex;
      justify-content: center;
      margin-top: 10%;
      font-weight: 600;
      font-size: 1.1em;
      word-spacing: 1px;
    }
    #t2 {
      display: flex;
      justify-content: center;
      margin-top: -20px;
      word-spacing: 1px;
    }
  }
  #tRow {
    display: flex;
    margin: auto;
    #tReturn {
      font-weight: 550;
      font-size: 1.1em;
      padding: 9px 25px;
      text-transform: capitalize;
      margin-top: 25px;
      color: white;
      border: 2px solid white;
      padding: 9px 25px;
      text-transform: capitalize;
      background-image: linear-gradient(
        -120deg,
        #4ceae7,
        #23bcd6 50%,
        #0298c8 95%,
        #0298c8
      );
    }
  }
}
// @media (max-width: 600px) {
//   #tbg {
//     @include bgiColor(map-get($colorz, lg3));
//     min-height: 100vh;
//   }
// }
</style>
