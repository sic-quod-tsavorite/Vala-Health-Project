<template>
  <v-app id="bibg">
    <p id="b1">Book an appointment</p>
    <v-card id="bicard">
      <v-col>
        <v-radio-group v-model="radios" :mandatory="false">
          <p id="b2">
            <b>How would you like to be contacted?</b>
          </p>
          <v-radio label="-Phone" value="radio-1"></v-radio>
          <v-radio label="-E-mail" value="radio-2"></v-radio>
          <v-radio label="-Text chat" value="radio-3"></v-radio>
          <v-radio label="-Video chat" value="radio-4"></v-radio>
        </v-radio-group>
        <p id="b3">
          Booking times may vary depending of your choice
        </p>
      </v-col>
    </v-card>
    <v-row id="brow">
      <a class="routerLink" href="/Mypage">
        <v-btn rounded id="bCancel">Cancel</v-btn>
      </a>
      <a class="routerLink" href="/Thanks"
        ><v-btn rounded id="bSubmit">Next</v-btn></a
      >
    </v-row>
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  font-family: 'Raleway', sans-serif;
}

#bicard {
  contain: content;
  min-height: fit-content;
}

@media (min-width: 1025px) {
  #bibg {
    @include bgiColor(map-get($colorz, lg3));
    min-height: 100vh;
  }
  #b1 {
    margin-left: auto;
    margin-right: auto;
    margin-top: 94px;
    font-size: 1.8em;
    font-weight: 800;
  }
  #bicard {
    display: flex;
    margin: auto;
    margin-top: 50px;
    padding-left: 50px;
    width: 40vw;
    height: 60vh;
    #b2 {
      font-size: 1.3em;
    }
    #b3 {
      font-size: 1em;
      margin-top: 50px;
    }
  }

  .v-input--radio-group--column .v-radio:not(:first-child):not(:only-child) {
    margin-top: 5%;
  }
  #brow {
    display: flex;
    margin-top: 50px;
    margin-bottom: 50px;
    justify-content: space-evenly;
    #bSubmit {
      font-weight: 500;
      font-size: 1.2em;
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
    #bCancel {
      font-weight: 500;
      font-size: 1.2em;
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
@media (max-width: 1024px) {
  #bibg {
    @include bgiColor(map-get($colorz, lg3));
    min-height: 100vh;
  }
  #b1 {
    margin-left: auto;
    margin-right: auto;
    margin-top: 69px;
    font-size: 1.8em;
    font-weight: 800;
  }
  #bicard {
    display: flex;
    margin: auto;
    margin-top: 25px;
    padding-left: 25px;
    width: 60vw;
    height: 40vh;
    #b2 {
      font-size: 1.3em;
    }
    #b3 {
      font-size: 1em;
      margin-top: 25px;
    }
  }

  #brow {
    display: flex;
    margin-top: 50px;
    margin-bottom: 50px;
    justify-content: space-evenly;
    #bSubmit {
      font-weight: 500;
      font-size: 1.2em;
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
    #bCancel {
      font-weight: 500;
      font-size: 1.2em;
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
@media (max-width: 600px) {
  #bibg {
    @include bgiColor(map-get($colorz, lg3));
    min-height: 100vh;
  }
  #b1 {
    margin-left: auto;
    margin-right: auto;
    margin-top: 69px;
    font-size: 1.8em;
    font-weight: 800;
  }
  #bicard {
    display: flex;
    margin: auto;
    margin-top: 25px;
    padding-left: 25px;
    width: 60vw;
    height: 60vh;
    #b2 {
      font-size: 1.3em;
    }
    #b3 {
      font-size: 1em;
      margin-top: 25px;
    }
  }

  #brow {
    display: flex;
    margin-top: 50px;
    margin-bottom: 50px;
    justify-content: space-evenly;
    #bSubmit {
      font-weight: 500;
      font-size: 1.2em;
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
    #bCancel {
      font-weight: 500;
      font-size: 1.2em;
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
</style>
