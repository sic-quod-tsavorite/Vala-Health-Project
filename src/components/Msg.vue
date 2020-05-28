<template>
  <v-content id="msgBody">
    <v-row justify="center">
      <div id="msgGreyBg">
        <v-tabs id="chatBox" centered grow>
          <v-tab>Unread</v-tab>
          <v-tab>Sent</v-tab>
          <v-tab>Previous</v-tab>
          <v-tab>Current</v-tab>
          <v-tab-item>
            <v-card flat height="65vh" id="chatCard">
              <v-container>
                <v-row>
                  <v-col>
                    <v-card id="docMsg" shaped color="#60d7fd">
                      <v-card-title>Doctor:</v-card-title>
                      <v-card-text>Example message</v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-card id="docMsg" shaped color="#60d7fd">
                      <v-card-title>Doctor:</v-card-title>
                      <v-card-text>Example message</v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
            <v-text-field
              filled
              clear-icon="mdi-close-circle"
              clearable
              placeholder="Type Here"
              type="text"
              outlined
            ></v-text-field>
          </v-tab-item>
          <v-tab-item>
            <v-card flat height="65vh" id="chatCard">
              <v-container>
                <v-row>
                  <v-col>
                    <v-card id="youMsg" shaped color="#e9e9e9">
                      <v-card-title>You:</v-card-title>
                      <v-card-text>Example message</v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-card id="youMsg" shaped color="#e9e9e9">
                      <v-card-title>You:</v-card-title>
                      <v-card-text>Example message</v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
            <v-text-field
              filled
              clear-icon="mdi-close-circle"
              clearable
              placeholder="Type Here"
              type="text"
              outlined
              disabled
            ></v-text-field>
          </v-tab-item>
          <v-tab-item>
            <v-card flat height="65vh" id="chatCard">
              <v-container>
                <v-row>
                  <v-col>
                    <v-card id="docMsg" shaped color="#60d7fd">
                      <v-card-title>Doctor:</v-card-title>
                      <v-card-text>Example message</v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-card id="youMsg" shaped color="#e9e9e9">
                      <v-card-title>You:</v-card-title>
                      <v-card-text>Example message</v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-card id="docMsg" shaped color="#60d7fd">
                      <v-card-title>Doctor:</v-card-title>
                      <v-card-text>Example message</v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-card id="youMsg" shaped color="#e9e9e9">
                      <v-card-title>You:</v-card-title>
                      <v-card-text>Example message</v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
            <v-text-field
              filled
              clear-icon="mdi-close-circle"
              clearable
              placeholder="Type Here"
              type="text"
              outlined
              disabled
            ></v-text-field>
          </v-tab-item>
          <v-tab-item>
            <v-card flat height="65vh" id="chatCard">
              <v-container>
                <v-row>
                  <v-col>
                    <v-card id="docMsg" shaped color="#60d7fd">
                      <v-card-title>Doctor:</v-card-title>
                      <v-card-text>Example message</v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-card id="youMsg" shaped color="#e9e9e9">
                      <v-card-title>You:</v-card-title>
                      <v-card-text>Example message</v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
            <v-text-field
              filled
              clear-icon="mdi-close-circle"
              clearable
              placeholder="Type Here"
              type="text"
              outlined
            ></v-text-field>
          </v-tab-item>
        </v-tabs>
        <v-container id="msgOuterBtns">
          <v-row align="center">
            <v-col cols="0"></v-col>
            <v-col cols="5" align="center">
              <router-link class="routerLink" to="/mypage">
                <v-btn rounded outlined id="msgCanc" large>Return</v-btn>
              </router-link>
            </v-col>
            <v-col cols="5">
              <v-select
                v-model="select"
                :items="items"
                item-text="state"
                label="Dates"
                persistent-hint
                return-object
                single-line
                outlined
              ></v-select>
            </v-col>
            <v-col cols="0"></v-col>
          </v-row>
        </v-container>
      </div>
    </v-row>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { state: '05/20' },
        { state: '04/20' },
        { state: '03/20' },
        { state: '02/20' },
        { state: '01/20' },
      ],
    };
  },
};
</script>

<style lang="scss">
#msgBody {
  @include bgiColor(map-get($colorz, lg2));
  overflow-x: hidden;
  overflow-y: auto;
}

#msgGreyBg {
  width: 90vw;
  background: #f3f5f5;
}

#chatBox {
  margin: 2.5% auto;
  width: 90%;
  .v-tabs-bar.v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-tabs-bar--show-arrows):not(.v-slide-group--has-affixes)
    .v-slide-group__prev {
    display: none;
  }
  .v-tab {
    font-size: 12px;
    padding: 0;
  }
  #chatCard {
    contain: content;
    overflow-y: auto;
  }
  #youMsg,
  #docMsg {
    width: 60%;
  }
  #docMsg {
    margin: auto 0 auto auto;
  }
  .v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)
    > .v-input__control
    > .v-input__slot,
  .v-text-field.v-text-field--enclosed .v-text-field__details {
    margin-bottom: 0;
  }
  .v-text-field.v-text-field--enclosed .v-text-field__details {
    display: none;
  }
}
#msgOuterBtns {
  padding-top: 0;
}
#msgCanc {
  margin-top: -30px;
}

@media (min-width: 600px) {
  #chatBox {
    .v-tab {
      font-size: unset;
      padding: unset;
    }
    #youMsg,
    #docMsg {
      width: 55%;
    }
  }
}

@media (min-width: 1264px) {
  #chatBox {
    .v-tabs-bar.v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-tabs-bar--show-arrows):not(.v-slide-group--has-affixes)
      .v-slide-group__prev {
      display: unset;
    }
    #youMsg,
    #docMsg {
      width: 49%;
    }
  }
}
@media (min-width: 1904px) {
  #chatBox {
    width: 80%;
    #youMsg,
    #docMsg {
      width: 45%;
    }
  }
}
</style>
