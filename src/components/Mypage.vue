<template>
  <v-content id="mpbg">
    <v-row justify="center">
      <v-card id="wbg">
        Name: John Smith
        <h1>Welcome</h1>
        <p>
          This is your profile, here you can book an appointment, renew
          prescription, read previous replies from your doctor and get
          e-consulation.
        </p>
        <v-row justify="center">
          <div id="vid"></div>
        </v-row>
        <div id="txtbox">
          <v-container id="txtbox1">
            <v-col>
              <v-row>
                <div id="c1">
                  <h3>Book an appointment</h3>
                  Here you can book an appointment, find available times,
                  pricing plans and contact options. There is also an optional
                  self test below.

                  <br />Book an appointment or Find the right Doctor for you.
                </div>

                <div id="c2">
                  <h3>E-consultation</h3>
                  Here you can write a message to one of our doctors. If you
                  have more complicated questions we would advise booking an
                  appointment. <br />E-consultation
                </div>
              </v-row>
              <v-row>
                <div id="c3">
                  <h3>Replies from the doctor (0)</h3>

                  Here you can read your unread replies from your doctor, sent
                  messages, previous and current conversations
                  <br />
                  Replies from the doctor
                </div>

                <div id="c4">
                  <h3>Renew prescription</h3>
                  Here you can renew your previous prescriptions
                  <br />

                  <v-select :items="items" label="Request perscription">
                  </v-select>
                  <v-dialog max-width="300px" v-model="dialog"
                    ><v-btn
                      flat
                      slot="activator"
                      @click.stop="dialog = true"
                      id="Prescription"
                      >Submit Request</v-btn
                    >
                    <v-card>
                      <v-card-title class="headline"
                        >Renewal Requested!</v-card-title
                      ><br />
                      <v-card-subtitle
                        >A Renewal has been requested, a doctor will send you an
                        e-mail</v-card-subtitle
                      >

                      <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn color="Blue" text @click="dialog = false">
                          Close
                        </v-btn>
                      </v-card-actions>
                    </v-card></v-dialog
                  >
                </div>
              </v-row>
            </v-col>
          </v-container>
        </div>
      </v-card>
    </v-row>
  </v-content>
</template>

<script>
export default {
  data: () => ({
    items: ["Alprazolam (Xanax)", "Citalopram (Celexa)", "Asenapine (Saphris)"],
    dialog: false,
  }),
};
</script>

<style lang="scss">
* {
  font-family: "Raleway", sans-serif;
}
@media (min-width: 1024px) {
  #mpbg {
    @include Flexbox(column);
    min-height: 110vh;
    background: linear-gradient(0, #0298c8 14%, #4cebe7 48%, #0198c8 83%);
  }
  #wbg {
    background-color: white;
    min-height: 90vh;
    min-width: 70vw;
    width: 50%;
    padding-left: 30px;
    padding-right: 30px;
    h1 {
      margin-top: 2%;
      text-align: left;
      color: black;
    }
    p {
      padding: 5% auto;
    }
    #vid {
      background-color: black;
      min-height: 40vh;
      width: 50%;
    }
    #txtbox {
      background-color: white;
      min-height: 44vh;
      width: 100%;
      margin-left: 2%;
      padding: 5px;
      width: 65vw;
      #txtbox1 {
        @include Txtbox(Raleway);
        #c1 {
          min-height: 25%;
          width: 30vw;
          background-color: white;
          padding: 5%;
          h3 {
            font-size: 1.5rem !important;
            font-weight: 400;
            line-height: 2rem;
            letter-spacing: normal !important;
            color: #004172;
          }
        }
        #c2 {
          min-height: 25%;
          width: 30vw;
          background-color: white;
          padding: 5%;

          h3 {
            font-size: 1.5rem !important;
            font-weight: 400;
            line-height: 2rem;
            letter-spacing: normal !important;
            color: #004172;
          }
        }
        #c3 {
          min-height: 25%;
          width: 30vw;
          background-color: white;
          padding: 5%;

          h3 {
            font-size: 1.5rem !important;
            font-weight: 400;
            line-height: 2rem;
            letter-spacing: normal !important;
            color: #004172;
          }
        }
        #c4 {
          min-height: 25%;
          width: 30vw;
          background-color: white;
          padding: 5%;
          margin-top: 0%;
          h3 {
            font-size: 1.5rem !important;
            font-weight: 400;
            line-height: 2rem;
            letter-spacing: normal !important;
            color: #004172;
          }
          #Prescription {
            color: #004172;
          }
        }
      }
    }
  }
}
@media (max-width: 1024px) {
  #mpbg {
    @include Flexbox(column);
    min-height: 110vh;
    background: linear-gradient(0, #0298c8 14%, #4cebe7 48%, #0198c8 83%);
  }
  #wbg {
    background-color: white;
    height: 100%;
    min-width: 70vw;
    width: 50%;

    h1 {
      margin-top: 2%;
      text-align: left;
      color: black;
      margin-left: 15px;
    }
    p {
      padding: 5% auto;
      margin-left: 20px;
      margin-right: 20px;
    }
    #vid {
      background-color: black;
      min-height: 40vh;
      width: 50%;
      width: 600px;
      margin-left: 20px;
      margin-right: 20px;
    }
    #txtbox {
      background-color: white;
      width: 100%;
      padding: 5px;

      #txtbox1 {
        @include Txtbox(Raleway);
        #c1 {
          height: 100%;
          width: 100%;
          background-color: white;
          padding: 5%;
          h3 {
            font-size: 1.5rem !important;
            font-weight: 400;
            line-height: 2rem;
            letter-spacing: normal !important;
            color: #004172;
          }
        }
        #c2 {
          height: 100%;
          width: 100%;
          background-color: white;
          padding: 5%;

          h3 {
            font-size: 1.5rem !important;
            font-weight: 400;
            line-height: 2rem;
            letter-spacing: normal !important;
            color: #004172;
          }
        }
        #c3 {
          height: 100%;
          width: 100%;
          background-color: white;
          padding: 5%;

          h3 {
            font-size: 1.5rem !important;
            font-weight: 400;
            line-height: 2rem;
            letter-spacing: normal !important;
            color: #004172;
          }
        }
        #c4 {
          height: 100%;
          width: 100%;
          background-color: white;
          padding: 5%;

          h3 {
            font-size: 1.5rem !important;
            font-weight: 400;
            line-height: 2rem;
            letter-spacing: normal !important;
            color: #004172;
          }
          #Prescription {
            color: #004172;
          }
        }
      }
    }
  }
}
</style>
