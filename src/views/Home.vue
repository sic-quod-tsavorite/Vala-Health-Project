<template>
  <v-app id="body">
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
            Login
          </v-btn>
        </router-link>
      </div>
    </v-app-bar>
    <v-img id="banner" src="../assets/fpBanner.png" height="30vw" width="100vw">
      <h1>Affordable, private online mental health support</h1>
      <v-row justify="center">
        <router-link class="routerLink" to="/login">
          <v-btn depressed outlined rounded color="white" x-large id="bannerBtn"
            >Book now</v-btn
          >
        </router-link>
      </v-row>
    </v-img>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card id="mentalHealth" class="mentalCard1"
            ><h2>Depression</h2>
            <h3 id="hovTxt">
              place holder text
            </h3></v-card
          >
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card
            id="mentalHealth"
            class="mentalCard2"
            img="https://firebasestorage.googleapis.com/v0/b/valahealth-project.appspot.com/o/aspects-counselling-2.jpg?alt=media&token=65c58f2c-8bc5-4d4b-96ef-d8b8e0dc142e"
            ><h2 class="wh2">Relationships</h2>
            <h3 id="hovTxt" class="wh2">
              place holder text
            </h3></v-card
          >
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card id="mentalHealth" class="mentalCard3"
            ><h2>Stress</h2>
            <h3 id="hovTxt">
              place holder text
            </h3></v-card
          >
        </v-col>
        <v-col cols="12" sm="6" md="12" lg="3">
          <v-card
            id="mentalHealth"
            class="mentalCard4"
            img="https://firebasestorage.googleapis.com/v0/b/valahealth-project.appspot.com/o/aspects-counselling-4.jpg?alt=media&token=1050752f-83ad-4a9e-9442-e538eaa91188"
            ><h2 class="wh2">Anxiety</h2>
            <h3 id="hovTxt" class="wh2">
              place holder text
            </h3></v-card
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card
            id="mentalHealth"
            class="mentalCard5"
            img="https://firebasestorage.googleapis.com/v0/b/valahealth-project.appspot.com/o/aspects-counselling-1.jpg?alt=media&token=478c59a2-f0f8-4d6d-93fb-3bc0c0b88c34"
            ><h2 class="wh2">Self-Esteem</h2>
            <h3 id="hovTxt" class="wh2">
              place holder text
            </h3></v-card
          >
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card id="mentalHealth" class="mentalCard6"
            ><h2>Addiction</h2>
            <h3 id="hovTxt">
              place holder text
            </h3></v-card
          >
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card
            id="mentalHealth"
            class="mentalCard7"
            img="https://firebasestorage.googleapis.com/v0/b/valahealth-project.appspot.com/o/aspects-counselling-3.jpg?alt=media&token=dd969afc-93fb-4b7d-8333-8b7e2c02da9c"
            ><h2 class="wh2">Grief</h2>
            <h3 id="hovTxt" class="wh2">
              place holder text
            </h3></v-card
          >
        </v-col>
        <v-col cols="12" sm="6" md="12" lg="3">
          <v-card id="mhLast"><h2>... and more</h2></v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container id="valaInfContMobil">
      <v-row justify="center">
        <v-col cols="auto">
          <v-card
            class="valaInf"
            id="valaInfWhiteTxt"
            img="https://firebasestorage.googleapis.com/v0/b/valahealth-project.appspot.com/o/valaInfImg.png?alt=media&token=1d8003b7-ba23-4676-ad0d-02f0dce4c350"
          >
            <div>
              <h1>Welcome to Vala</h1>
              <h3>
                Vala is an online consulting service that enables people to have
                health and social care appointments from home or wherever is
                convenient.
              </h3>
              <router-link class="routerLink" to="#">
                <v-btn outlined rounded large>About Us</v-btn>
              </router-link>
            </div>
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card class="valaInf" id="valaInfB">
            <h1>Life Support</h1>
            <h4>
              Our qualified, empathetic team are available with many years of
              experience in systemic relational counselling. We have tried to
              make it as easy for you as possible to find the right doctor. You
              can find the right doctor for with our detailed personas. If you
              don’t feel comfortable finding one yourself we have also made it
              possible to run a survey. Through the survey you will find the
              doctor just right for you.
            </h4>
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card class="valaInf" id="valaInfW">
            <h2>Ready to speak to Vala?</h2>
            <router-link class="routerLink" to="/login">
              <v-btn outlined rounded large id="valaInfBtn">Book Now</v-btn>
            </router-link>
            <h3 id="valaH3noM">
              Before booking can you run a survey and find the doctor that is
              just right for you!
            </h3>
            <router-link class="routerLink" to="/login">
              <v-btn outlined rounded large id="valaInfBtn">Run Survey</v-btn>
            </router-link>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container id="valaInfContDesk">
      <v-row justify="center">
        <v-col cols="auto">
          <v-card class="valaInf" id="valaInfW">
            <h1>Welcome to Vala</h1>
            <h3>
              Vala is an online consulting service that enables people to have
              health and social care appointments from home or wherever is
              convenient.
            </h3>
            <router-link class="routerLink" to="#">
              <v-btn outlined rounded large>About Us</v-btn>
            </router-link>
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card
            class="valaInf"
            img="https://firebasestorage.googleapis.com/v0/b/valahealth-project.appspot.com/o/valaInfImg.png?alt=media&token=1d8003b7-ba23-4676-ad0d-02f0dce4c350"
          ></v-card>
        </v-col>
        <v-col cols="auto">
          <v-card class="valaInf" id="valaInfB">
            <h1>Life Support</h1>
            <h4>
              Our qualified, empathetic team are available with many years of
              experience in systemic relational counselling. We have tried to
              make it as easy for you as possible to find the right doctor. You
              can find the right doctor for with our detailed personas. If you
              don’t feel comfortable finding one yourself we have also made it
              possible to run a survey. Through the survey you will find the
              doctor just right for you.
            </h4>
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card class="valaInf" id="valaInfW">
            <h2>Ready to speak to Vala?</h2>
            <router-link class="routerLink" to="/login">
              <v-btn outlined rounded large id="valaInfBtn">Book Now</v-btn>
            </router-link>
            <h2>
              Before booking can you run a survey and find the doctor that is
              just right for you!
            </h2>
            <router-link class="routerLink" to="/login">
              <v-btn outlined rounded large id="valaInfBtn">Run Survey</v-btn>
            </router-link>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container id="userCardMobil">
      <v-row justify="center">
        <v-col cols="auto">
          <v-card
            img="https://firebasestorage.googleapis.com/v0/b/valahealth-project.appspot.com/o/userCardImg1.png?alt=media&token=27682b9d-a79b-48ec-95a7-4f499046d094"
            id="userCard"
            class="userCard1"
            ><div>
              <h4>
                “This has probably been the most helpful counseling of my life.
                The therapist made me feel so comfortable. Very considerate yet
                still professional. I felt like I was talking with an old
                friend.”
              </h4>
            </div>
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card
            id="userCard"
            class="userCard4"
            img="https://firebasestorage.googleapis.com/v0/b/valahealth-project.appspot.com/o/userCardImg2.png?alt=media&token=31dc0b41-d04a-4ddd-b674-fdb39f58c10e"
            ><div>
              <h4>
                “Since I have started using Vala, I feel happier, less stressed
                and in control. Vala is convenient, affordable and simple to
                use”
              </h4>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container id="userCardDesk">
      <v-row justify="center">
        <v-col cols="auto">
          <v-card
            img="https://firebasestorage.googleapis.com/v0/b/valahealth-project.appspot.com/o/userCardImg1.png?alt=media&token=27682b9d-a79b-48ec-95a7-4f499046d094"
            id="userCard"
            class="userCard1"
          ></v-card>
        </v-col>
        <v-col cols="auto">
          <v-card id="userCard" class="userCard2">
            <h4>
              “This has probably been the most helpful counseling of my life.
              The therapist made me feel so comfortable. Very considerate yet
              still professional. I felt like I was talking with an old friend.”
            </h4>
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card id="userCard" class="userCard3">
            <h4>
              “Since I have started using Vala, I feel happier, less stressed
              and in control. Vala is convenient, affordable and simple to use”
            </h4>
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card
            id="userCard"
            class="userCard4"
            img="https://firebasestorage.googleapis.com/v0/b/valahealth-project.appspot.com/o/userCardImg2.png?alt=media&token=31dc0b41-d04a-4ddd-b674-fdb39f58c10e"
          ></v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container id="docCardsMobil">
      <v-row>
        <v-row id="docCardRow">
          <v-col>
            <v-card id="docCard">
              <h1>Susan</h1>
              <h3>Specialties</h3>
              <ul>
                <li>Stress, Anxiety</li>
                <li>Self esteem</li>
                <li>Depression</li>
              </ul>
              <h4>Years of experience: 3</h4>
            </v-card>
          </v-col>
          <v-col>
            <v-card id="docImgCard" class="botImgDoc">
              <v-img src="../assets/docImg1.png" position="center top"></v-img>
            </v-card>
          </v-col>
        </v-row>
        <v-row id="docCardRow">
          <v-col>
            <v-card id="docCard">
              <h1>Greg</h1>
              <h3>Specialties</h3>
              <ul>
                <li>Addictions</li>
                <li>Career difficulties</li>
                <li>Depression</li>
              </ul>
              <h4>Years of experience: 6</h4>
            </v-card>
          </v-col>
          <v-col>
            <v-card id="docImgCard">
              <v-img src="../assets/docImg2.png" position="center top"></v-img>
            </v-card>
          </v-col>
        </v-row>
        <v-row id="docCardRow" justify="center">
          <v-col cols="auto">
            <v-card id="docCard">
              <h1>Judy</h1>
              <h3>Specialties</h3>
              <ul>
                <li>Trauma and abuse</li>
                <li>Parenting issues</li>
                <li>Depression</li>
              </ul>
              <h4>Years of experience: 8</h4>
            </v-card>
          </v-col>
          <v-col cols="auto">
            <v-card id="docImgCard" class="botImgDoc">
              <v-img src="../assets/docImg3.png" position="center top"></v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
    <v-container id="docCardsDesk">
      <v-row>
        <v-col>
          <v-card id="docCard">
            <h1>Susan</h1>
            <h3>Specialties</h3>
            <ul>
              <li>Stress, Anxiety</li>
              <li>Self esteem</li>
              <li>Depression</li>
            </ul>
            <h4>Years of experience: 3</h4>
          </v-card>
        </v-col>
        <v-col>
          <v-card
            id="docImgCard"
            img="https://firebasestorage.googleapis.com/v0/b/valahealth-project.appspot.com/o/docImg2.png?alt=media&token=8ba61884-8a26-4390-ac58-a41c8a449492"
          ></v-card>
        </v-col>
        <v-col>
          <v-card id="docCard">
            <h1>Judy</h1>
            <h3>Specialties</h3>
            <ul>
              <li>Trauma and abuse</li>
              <li>Parenting issues</li>
              <li>Depression</li>
            </ul>
            <h4>Years of experience: 8</h4>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card
            id="docImgCard"
            class="botImgDoc"
            img="https://firebasestorage.googleapis.com/v0/b/valahealth-project.appspot.com/o/docImg1.png?alt=media&token=7d0eff92-15e2-444e-ba6d-daede9fdf553"
          ></v-card>
        </v-col>
        <v-col>
          <v-card id="docCard">
            <h1>Greg</h1>
            <h3>Specialties</h3>
            <ul>
              <li>Addictions</li>
              <li>Career difficulties</li>
              <li>Depression</li>
            </ul>
            <h4>Years of experience: 6</h4>
          </v-card>
        </v-col>
        <v-col>
          <v-card
            id="docImgCard"
            class="botImgDoc"
            img="https://firebasestorage.googleapis.com/v0/b/valahealth-project.appspot.com/o/docImg3.png?alt=media&token=9ef77dee-464e-4eb7-b949-d479c1ed87a3"
          ></v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container id="book">
      <h1>
        Ready to speak to Vala?
      </h1>
      <router-link class="routerLink" to="/login">
        <v-btn outlined rounded large width="200px" color="white" id="bookBtn"
          >Book</v-btn
        >
      </router-link>
    </v-container>
    <div id="trustpilot">
      <v-container id="trustCont">
        <h1>Vala is rated excellent on Trustpilot:</h1>
        <v-row justify="center">
          <v-col cols="auto">
            <v-img id="tpImg" src="../assets/trustpilot_1.svg"></v-img>
          </v-col>
          <v-col cols="auto">
            <v-img id="tpImg" src="../assets/trustpilot_1.svg"></v-img>
          </v-col>
          <v-col cols="auto">
            <v-img id="tpImg" src="../assets/trustpilot_1.svg"></v-img>
          </v-col>
          <v-col cols="auto">
            <v-img id="tpImg" src="../assets/trustpilot_1.svg"></v-img>
          </v-col>
          <v-col cols="auto">
            <v-img id="tpImg" src="../assets/trustpilot_3.svg"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss">
#body {
  min-height: 100vh;
  background: linear-gradient(0, #0298c8 14%, #4cebe7 48%, #0198c8 83%);
  overflow-x: hidden;
}

#banner {
  margin-bottom: 5%;
  h1 {
    text-align: center;
    color: white;
    text-shadow: 0 0 15px rgba(0, 0, 0, 0.9);
    margin-top: -5%;
    font-family: walkway-black;
    transform: scale(0.5);
  }
  #bannerBtn {
    margin-top: -5%;
    transform: scale(0.75);
    text-shadow: 0 0 15px rgba(0, 0, 0, 0.9);
  }
}

#mentalHealth,
#mhLast {
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    position: absolute;
    transition: 0.4s;
  }
  .wh2 {
    color: white;
    text-shadow: 0 0 20px black;
  }
  #hovTxt {
    text-align: center;
    opacity: 0;
  }
}
#mentalHealth:hover {
  h2 {
    opacity: 0;
  }
  #hovTxt {
    opacity: 1;
    transition: 0.4s;
  }
}
.mentalCard1,
.mentalCard3,
.mentalCard6,
#mhLast {
  height: 50vw;
}
.mentalCard2,
.mentalCard4,
.mentalCard5,
.mentalCard7 {
  height: 100vw;
}

#valaInfContMobil {
  margin: 5% auto;
}

#valaInfContDesk {
  display: none;
}

.valaInf {
  width: 100vw;
  height: 65vw;
  text-align: center;
  padding: 5%;
  background: rgba(243, 243, 243, 0.8);
  h1 {
    font-family: walkway-black;
    margin-bottom: 2%;
    font-size: 25px;
  }
  h3 {
    margin-bottom: 10%;
    font-size: 15px;
  }
  h4 {
    font-size: 12px;
  }
  h2 {
    margin-bottom: 5%;
  }
  #valaInfBtn {
    margin-bottom: 5%;
  }
  #valaH3noM {
    margin-bottom: 2%;
  }
}
#valaInfWhiteTxt {
  padding: 0;
  div {
    background: rgba(255, 255, 255, 0.5);
    width: 100%;
    height: 100%;
    padding: 5%;
  }
}
#valaInfW {
  background: rgba(243, 243, 243, 0.8);
}
#valaInfB {
  background: rgba(9, 205, 230, 0.8);
}

#userCardDesk {
  display: none;
}

#userCard {
  width: 100vw;
  height: 40vh;
  min-height: calc(100vw / 2.5);
  text-align: center;
  display: flex;
  align-items: center;
  padding: 0;
  div {
    background: rgba(255, 255, 255, 0.5);
    width: 100%;
    height: 100%;
    padding: 10%;
  }
  h4 {
    font-size: 20px;
  }
}

#docCardsDesk {
  display: none;
}

#docCard {
  padding: 10%;
  height: 30vh;
  width: 100vw;
  min-height: calc(100vw / 3);
  margin-top: 10%;
}
#docImgCard {
  height: 50vh;
  min-height: calc(100vw / 1.5);
  width: 100vw;
  contain: content;
}

#book {
  text-align: center;
  h1 {
    margin: 5% auto 2.5% auto;
    color: white;
  }
  h1,
  #bookBtn {
    transform: scale(0.7);
  }
}

#trustpilot {
  background: #f3f5f5;
  width: 100vw;
  text-align: center;
  margin-top: 5%;
  #trustCont {
    margin: 1.5% auto;
    transform: scale(0.8);
    h1 {
      margin-bottom: 1.5%;
    }
    #tpImg {
      width: 50px;
      height: 50px;
    }
  }
}

@media (min-width: 600px) {
  #banner {
    padding-top: 5%;
    h1 {
      margin-bottom: 5%;
    }
  }
  .mentalCard1,
  .mentalCard2,
  .mentalCard3,
  .mentalCard4,
  .mentalCard5,
  .mentalCard6,
  .mentalCard7,
  #mhLast {
    height: 60vw;
  }
  .valaInf {
    width: 80vw;
    height: 50vw;
    h1 {
      font-size: 30px;
    }
    h3 {
      font-size: 20px;
      margin-bottom: 5%;
    }
    h4 {
      font-size: 16px;
    }
  }
  #userCard {
    h4 {
      font-size: 30px;
    }
  }
  #docCard {
    height: 30vh;
  }
  #docImgCard {
    height: 65vh;
  }
  #book {
    h1,
    #bookBtn {
      transform: scale(1);
    }
  }
  #trustpilot {
    #trustCont {
      transform: scale(0.9);
      #tpImg {
        width: 70px;
        height: 70px;
      }
    }
  }
}

@media (min-width: 960px) {
  #banner {
    h1 {
      margin-top: 0;
      transform: scale(1);
    }
    #bannerBtn {
      margin-top: 0;
      transform: scale(1);
    }
  }
  .mentalCard1,
  .mentalCard2,
  .mentalCard3,
  .mentalCard5,
  .mentalCard6,
  .mentalCard7 {
    height: 45vw;
  }
  .mentalCard4 {
    height: 30vw;
  }
  #mhLast {
    height: 15vw;
  }

  #valaInfContMobil {
    display: none;
  }
  #valaInfContDesk {
    display: unset;
  }
  .valaInf {
    width: 35vw;
    height: 35vw;
    h2 {
      font-size: 20px;
    }
    h3 {
      font-size: 17px;
    }
    h4 {
      font-size: 15px;
    }
  }
  #userCard {
    max-width: 700px;
  }
  #docCardRow {
    width: 40%;
    margin-top: 5%;
  }
  #docCard {
    height: 30vh;
    width: 45vw;
    margin-top: 0;
    min-height: unset;
  }
  #docImgCard {
    height: 50vh;
    width: 45vw;
    min-height: unset;
  }
  #trustpilot {
    #trustCont {
      transform: scale(1);
    }
  }
}

@media (min-width: 1264px) {
  .mentalCard1,
  .mentalCard3,
  .mentalCard6,
  #mhLast {
    height: 15vw;
  }
  .mentalCard2,
  .mentalCard4,
  .mentalCard5,
  .mentalCard7 {
    height: 30vw;
  }
  .mentalCard5,
  .mentalCard7 {
    margin-top: -15vw;
  }
  .valaInf {
    width: 29vw;
    height: 30vw;
    padding: 10%;
    h1 {
      font-size: 35px;
      margin-bottom: 5%;
    }
    h2 {
      font-size: 21px;
    }
    h3 {
      font-size: 20px;
    }
    h4 {
      font-size: 16px;
    }
    #valaInfBtn {
      margin-bottom: 10%;
    }
    #valaInfB {
      background: rgba(9, 205, 230, 0.8);
      padding: 5%;
    }
  }

  #userCardMobil {
    display: none;
  }
  #userCardDesk {
    display: unset;
  }
  #userCard {
    width: 30vw;
    height: 25vw;
    min-height: unset;
    background: rgba(243, 243, 243, 0.8);
    padding: 10%;
    h4 {
      font-size: 24px;
    }
  }

  .userCard1 {
    z-index: 3;
    margin: 10% -10% auto auto;
  }
  .userCard2 {
    z-index: 4;
    margin: auto auto 10% -5%;
  }
  .userCard3 {
    z-index: 2;
    margin: 5% -10% auto auto;
  }
  .userCard4 {
    z-index: 1;
    margin: -5% auto auto -5%;
  }
  #docCardsMobil {
    display: none;
  }
  #docCardsDesk {
    display: unset;
  }
  #docCard {
    width: unset;
    padding: 10%;
    height: 300px;
  }
  #docImgCard {
    width: unset;
    margin-top: unset;
    height: 650px;
    min-width: 350px;
  }
  .botImgDoc {
    margin-top: -350px !important;
  }
}
@media (min-width: 1904px) {
  .valaInf {
    width: 40vw;
    height: 25vw;
    h2,
    h3 {
      font-size: 25px;
    }
    h4 {
      font-size: 21px;
    }
  }
  #userCard {
    width: 40vw;
  }
}
@media (min-width: 2172px) {
  #banner {
    max-height: 600px;
  }
  .valaInf {
    width: 30vw;
    height: 25vw;
  }
}
</style>
