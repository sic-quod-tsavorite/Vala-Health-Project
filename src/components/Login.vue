<template>
  <v-app id="lbg">
    <v-app-bar class="heada" color="rgba(255, 255, 255, 0.7)" app flat>
      <v-spacer></v-spacer>
      <div class="d-flex-shrink-1">
        <a class="routerLink" href="/">
          <img src="https://valahealth.com/img/vala-logo.svg" width="100" />
        </a>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>
    <div id="bbg"></div>
    <v-card id="logcard">
      <v-card-title id="logtitle" class="justify-center">Log in</v-card-title>
      <v-card-subtitle>
        <v-col>
          <v-text-field placeholder="E-mail"></v-text-field>
          <v-text-field
            id="pwfield"
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            placeholder="Password"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
          <v-row justify="space-between">
            <v-checkbox
              v-model="checkbox"
              :label="`Stay signed in `"
            ></v-checkbox>
            <a>Forgot Password?</a>
          </v-row>
          <v-row justify="space-around">
            <a class="routerLink" href="/mypage">
              <v-btn id="loginBtn" depressed>Login</v-btn>
            </a>
            <a class="routerLink" href="/">
              <v-btn id="cancelBtn" depressed>Cancel</v-btn>
            </a>
          </v-row>
        </v-col>
      </v-card-subtitle>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      checkbox: false,
      show1: false,

      rules: {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => "The email and password you entered don't match",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  font-family: 'Raleway', sans-serif;
}

@media (min-width: 1300px) {
  .heada {
    margin: 0;
    padding: 0;
    z-index: 33;
    top: 1;
  }
  .v-application a {
    color: #999;
    margin-top: auto;
    margin-bottom: auto;
  }
  a:hover {
    text-decoration: underline;
  }
  .v-application--wrap {
    min-height: 80vh;
  }
  #lbg {
    background: url(../assets/loginbg.png) no-repeat;
    background-size: cover;
    background-position: center;
    position: fixed;
    height: 100vh;
    width: 100%;
    z-index: 999;
    margin: 0;
    padding: 0;
    top: 0;
  }
  #bbg {
    @include bgiColor(map-get($colorz, lg3));
    opacity: 0.7;
    height: 100vh;
    width: 100%;
    display: flex;
    position: absolute;
    top: 0;
  }

  #logcard {
    opacity: 0.9;
    height: auto;
    width: 35%;
    margin: auto;
    text-align: center;
    padding-left: 40px;
    padding-right: 40px;

    #logtitle {
      text-align: center;
    }
    #loginBtn {
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
      margin-top: 6px;
    }
    #cancelBtn {
      border-radius: 100px;
      margin-top: 6px;
      border: 2px solid gray;
      text-transform: capitalize;
    }
    .routerLink {
      text-decoration: none;
      #loginBtn:hover {
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
  }
}

@media (max-width: 1299px) {
  .heada {
    margin: 0;
    padding: 0;
    z-index: 33;
    top: 1;
  }
  .v-application a {
    color: #999;
    margin-top: auto;
    margin-bottom: auto;
  }
  a:hover {
    text-decoration: underline;
  }
  .v-application--wrap {
    min-height: 80vh;
  }
  #lbg {
    background: url(../assets/loginbg.png) no-repeat;
    background-size: cover;
    background-position: center;
    position: fixed;
    height: 100vh;
    width: 100%;
    z-index: 999;
    margin: 0;
    padding: 0;
    top: 0;
  }
  #bbg {
    @include bgiColor(map-get($colorz, lg3));
    opacity: 0.7;
    height: 100vh;
    width: 100%;
    display: flex;
    position: absolute;
    top: 0;
  }

  #logcard {
    transform: scale(1);
    opacity: 0.9;
    height: auto;
    width: 38%;
    margin: auto;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;

    #logtitle {
      text-align: center;
    }
    #loginBtn {
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
      margin-top: 6px;
    }
    #cancelBtn {
      border-radius: 100px;
      margin-top: 6px;
      border: 2px solid gray;
      text-transform: capitalize;
    }
    .routerLink {
      text-decoration: none;
      #loginBtn:hover {
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
  }
}
@media (max-width: 1024px) {
  .heada {
    margin: 0;
    padding: 0;
    z-index: 33;
    top: 1;
  }
  .v-application a {
    color: #999;
    margin-top: auto;
    margin-bottom: auto;
  }
  a:hover {
    text-decoration: underline;
  }
  .v-application--wrap {
    min-height: 80vh;
  }
  #lbg {
    background: url(../assets/loginbg.png) no-repeat;
    background-size: cover;
    background-position: center;
    position: fixed;
    height: 100vh;
    width: 100%;
    z-index: 999;
    margin: 0;
    padding: 0;
    top: 0;
  }
  #bbg {
    @include bgiColor(map-get($colorz, lg3));
    opacity: 0.7;
    height: 100vh;
    width: 100%;
    display: flex;
    position: fixed;
    margin: 0;
    padding: 0;
    top: 0;
  }

  #logcard {
    opacity: 0.9;
    height: auto;
    width: 80%;

    #loginBtn {
      @include Txtbtn(Raleway);
      overflow-y: none;
      font-weight: 500;
      background-color: #fff;
      border-radius: 100px;
      color: #48a0f7;
      border: 2px solid;
      font-size: 1em;
      padding: 9px 25px;
      text-transform: capitalize;
      margin-top: 24px;
    }
    #cancelBtn {
      border-radius: 100px;
      margin-top: 24px;
      border: 2px solid gray;
      text-transform: capitalize;
    }
  }
}
@media (max-height: 600px) {
  #logcard {
    transform: scale(0.7);
    width: 100%;
  }
}
</style>
