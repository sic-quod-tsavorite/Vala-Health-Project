<template>
  <v-app id="sbg">
    <v-app-bar class="header" color="white" app flat>
      <v-spacer></v-spacer>
      <div class="d-flex-shrink-1">
        <router-link class="routerLink" to="/">
          <img src="https://valahealth.com/img/vala-logo.svg" width="100" />
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <router-link class="routerLink" to="/">
        <v-btn id="loginbtn" depressed>
          Logout
        </v-btn>
      </router-link>
    </v-app-bar>
    <v-card id="scard">
      <v-col>
        <v-radio-group v-model="radios" :mandatory="false">
          <p id="s1">
            <b>Overall how are you feeling?</b>
          </p>
          <v-radio label="-Excellent" value="radio-1"></v-radio>
          <v-radio label="-Good" value="radio-2"></v-radio>
          <v-radio label="-Poor" value="radio-3"></v-radio>
        </v-radio-group>
        <v-radio-group v-model="radios" :mandatory="false">
          <p id="s1">
            <b
              >During the past two weeks, how often have you felt sad or
              depressed?</b
            >
          </p>
          <v-radio label="-Often" value="radio-1"></v-radio>
          <v-radio label="-Sometimes" value="radio-2"></v-radio>
          <v-radio label="-Not at all" value="radio-3"></v-radio>
        </v-radio-group>
        <v-radio-group v-model="radios" :mandatory="false">
          <p id="s1">
            <b
              >During the past two weeks, how often has your mental state
              interfered with your relationships?</b
            >
          </p>
          <v-radio label="-Often" value="radio-1"></v-radio>
          <v-radio label="-Sometimes" value="radio-2"></v-radio>
          <v-radio label="-Not at all" value="radio-3"></v-radio>
        </v-radio-group>
        <v-radio-group v-model="radios" :mandatory="false">
          <p id="s1">
            <b>
              During the past 2 weeks how often would you say your mental state
              has interfered with your abillity to go to work or accomplish
              tasks?
            </b>
          </p>
          <v-radio label="-Often" value="radio-1"></v-radio>
          <v-radio label="-Sometimes" value="radio-2"></v-radio>
          <v-radio label="-Not at all" value="radio-3"></v-radio>
        </v-radio-group>
      </v-col>
    </v-card>
    <v-row id="srow">
      <router-link class="routerLink" to="/">
        <v-btn rounded id="sCancel">Cancel</v-btn>
      </router-link>
      <router-link class="routerLink" to="/BookingInfo"
        ><v-btn rounded id="sSubmit">Next</v-btn></router-link
      >
    </v-row>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
* {
  font-family: 'Raleway', sans-serif;
}
#scard {
  contain: content;
  overflow-y: auto;
}
@media (min-width: 1024px) {
  #sbg {
    @include bgiColor(map-get($colorz, lg3));
    min-height: 110vh;
  }
  #scard {
    display: flex;
    margin: auto;
    margin-top: 64px;
    padding-left: 50px;
    width: 60vw;
    height: 90vh;
    #s1 {
      font-size: 1.3em;
    }
  }
  #srow {
    display: flex;
    margin-top: 50px;
    justify-content: space-around;
    #sSubmit {
      width: 130px;
      font-weight: 600;
      font-size: 1.1em;
      padding: 9px 25px;
      text-transform: capitalize;
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
    #sCancel {
      font-weight: 600;
      font-size: 1em;
      width: 130px;
      padding: 9px 25px;
      text-transform: capitalize;
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
@media (max-width: 1024px) {
  #sbg {
    @include bgiColor(map-get($colorz, lg3));
    min-height: 100%;
  }
  #scard {
    display: flex;
    margin: auto;
    margin-top: 48px;
    padding-left: 25px;
    width: 90vw;
    height: 100%;
    #s1 {
      font-size: 1em;
      font-weight: 1200;
    }
  }
  #srow {
    display: flex;
    margin-top: 25px;
    justify-content: space-around;
    margin-bottom: 25px;
    #sSubmit {
      font-weight: 600;
      font-size: 1em;
      padding: 9px 25px;
      text-transform: capitalize;
      width: 117.433px;
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
    #sCancel {
      font-weight: 600;
      font-size: 1em;
      padding: 9px 25px;
      text-transform: capitalize;
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
</style>
