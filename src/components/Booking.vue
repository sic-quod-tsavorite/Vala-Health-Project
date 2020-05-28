<template>
  <v-app id="bbg">
    <v-app-bar class="header" color="white" app flat>
      <v-spacer></v-spacer>
      <div class="d-flex-shrink-1">
        <router-link class="routerLink" to="/">
          <img src="https://valahealth.com/img/vala-logo.svg" width="100" />
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <router-link class="routerLink" to="/">
        <v-btn id="loginbtn">Logout</v-btn>
      </router-link>
    </v-app-bar>
    <v-card id="wbg">
      <v-card id="topSection" flat>
        <p id="top">Book an appointment</p>
        <v-row>
          <v-col id="col1">
            <p id="top2">
              Appointment for:
              <br />
              <br />
            </p>
            <p id="top3">To see a:</p>
          </v-col>
          <v-col id="col2">
            <v-select
              background-color="white"
              :items="names"
              label="John Smith"
              single-line
            ></v-select>
            <v-select
              background-color="white"
              :items="medic"
              label="Medical Practitioner"
              single-line
            ></v-select>
          </v-col>
        </v-row> </v-card
      >Available appointments

      <v-card id="appo" flat>
        <v-col>
          <p id="dayheader">Monday 18th of May 2020</p>

          <v-btn-toggle v-model="text" tile group>
            <v-col
              ><v-row id="frow">
                <v-btn depressed class="timebtn">
                  11:00
                </v-btn>
                <v-btn depressed id="tr" class="timebtn">
                  11:30
                </v-btn>
                <v-btn depressed class="timebtn">
                  12:00
                </v-btn></v-row
              >
              <v-row id="frow">
                <v-btn depressed class="timebtn">
                  12:30
                </v-btn>
                <v-btn depressed id="tr" class="timebtn">
                  13:00
                </v-btn>
                <v-btn depressed class="timebtn"> 13:30 </v-btn>
              </v-row></v-col
            >
          </v-btn-toggle>
        </v-col>
      </v-card>
      <v-card id="tfbox" flat>
        <v-col align="center">
          <p id="talk">To talk about</p>
          <v-textarea
            solo
            placeholder="Tell us what you'd like to discuss"
            color="#d9d9d9"
            no-resize
            auto-grow
            height="auto"
            style="width:600px;"
          ></v-textarea>
        </v-col>
      </v-card>
      <v-card id="subbox" flat>
        <p id="pay">I'd like to pay by</p>

        <v-btn-toggle v-model="text" tile color="white" width="auto">
          <v-row id="brow">
            <v-btn depressed id="po" class="brow"
              >Single Payment <br />
              £44.99</v-btn
            ><v-btn depressed id="po" class="brow"
              >Subscription <br />

              From £15.00/pm</v-btn
            ></v-row
          ></v-btn-toggle
        >
        <v-col>
          <v-row>
            <v-btn id="bbtn" depressed href="/Thanks"> Book </v-btn>

            <v-btn id="bbtn" depressed href="/Mypage"> Cancel </v-btn>
          </v-row>
        </v-col>
      </v-card>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    names: ["John Smith", "Jane Smith"],
    medic: ["Medical Practitioner", "Mentalhealth Specialist "],
  }),
};
</script>

<style lang="scss" scoped>
* {
  font-family: "Raleway", sans-serif;
}
.routerLink {
  text-decoration: none;
}

@media (min-width: 1025px) {
  #bbg {
    @include bgiColor(map-get($colorz, lg3));
    min-height: 100vh;
  }
  #wbg {
    margin-top: 10%;
    margin-left: auto;
    margin-right: auto;

    #topSection {
      border-bottom: 2px solid #cacaca;
      border-style: dashed;

      #top {
        text-align: center;
        margin-top: 3%;
        font-weight: bold;
        font-size: 1.2em;
        padding-bottom: 10px;
        border-bottom: 2px solid #cacaca;
        border-style: none none dashed none;
      }

      #col1 {
        margin-right: 30%;
        margin-left: 5%;
      }
      #col2 {
        margin-right: 5%;
      }
      #top2 {
        margin-top: 7%;
        margin-left: 5%;
      }
      #top3 {
        margin-left: 5%;
      }
    }
    #appo {
      text-align: center;
      margin-top: 3%;
      font-weight: bold;
      font-size: 1.2em;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 2px solid #cacaca;
      border-style: none none dashed none;

      #dayheader {
        text-align: center;
        margin: 0 auto;
      }
      #frow {
        width: 60vw;
        display: flex;
        justify-content: center;
      }
      #tr {
        margin-bottom: 10px;
        margin-left: 5%;
        margin-right: 5%;
      }
      .timebtn {
        width: 175px;
        height: 50px;
        padding: auto;
        border: solid 2px gray;
      }
    }
    #tfbox {
      text-align: left;
      margin-top: 3%;
      font-size: 1em;
      border-bottom: 2px solid #cacaca;
      border-style: none none dashed none;
      #talk {
        text-align: left;
      }
    }
    #subbox {
      text-align: center;
      margin-top: 3%;
      font-weight: bold;
      #pay {
        margin-left: 5%;
        text-align: left;
      }
      #brow {
        width: 100vw;
      }
      #po {
        margin: auto;
        background-color: #f3f5f5;
        height: 75px;
        width: 30%;
        margin-bottom: 50px;
        border: solid 2px gray;
      }

      #bbtn {
        margin: auto;
        width: 200px;
      }
    }
  }
}
@media (max-width: 1024px) {
  #bbg {
    @include bgiColor(map-get($colorz, lg3));
    min-height: 100vh;
  }
  #wbg {
    margin-top: 10%;
    margin-left: auto;
    margin-right: auto;

    #topSection {
      border-bottom: 2px solid #cacaca;
      border-style: dashed;

      #top {
        text-align: center;
        margin-top: 3%;
        font-weight: bold;
        font-size: 1.2em;
        padding-bottom: 10px;
        border-bottom: 2px solid #cacaca;
        border-style: none none dashed none;
      }

      #col1 {
        margin-top: 3%;
        margin-left: 5%;
      }
      #col2 {
        margin-right: 5%;
      }
      #top2 {
        margin-top: 7%;
        margin-left: 5%;
      }
      #top3 {
        margin-left: 5%;
      }
    }
    #appo {
      text-align: center;
      margin-top: 3%;
      font-weight: bold;
      font-size: 1.2em;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 2px solid #cacaca;
      border-style: none none dashed none;

      #dayheader {
        text-align: center;
        margin: 0 auto;
      }
      #frow {
        width: 60vw;
        display: flex;
        justify-content: center;
      }
      #tr {
        margin-left: 5%;
        margin-right: 5%;
      }
      .timebtn {
        width: 175px;
        height: 50px;
        padding: auto;
        border: solid 2px gray;
      }
    }
    #tfbox {
      text-align: left;
      margin-top: 3%;
      font-size: 1em;
      border-bottom: 2px solid #cacaca;
      border-style: none none dashed none;

      #talk {
        margin-left: 5%;
      }
    }
    #subbox {
      text-align: center;
      margin-top: 3%;
      font-weight: bold;

      #pay {
        margin-left: 5%;
        text-align: left;
      }

      #po {
        margin: auto;
        background-color: #f3f5f5;
        width: 200px;
        margin-bottom: 5%;
        border: solid 2px gray;
      }

      #bbtn {
        margin: auto;
        width: 200px;
        margin-bottom: 5%;
      }
    }
  }
}
</style>
