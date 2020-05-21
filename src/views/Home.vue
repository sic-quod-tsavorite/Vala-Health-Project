<template>
  <v-app id="body">
    <v-img
      id="banner"
      src="https://cdn.discordapp.com/attachments/702469113825460295/712642781524262952/unknown.png"
      height="30vw"
      width="100vw"
    >
      <h1>Affordable, private online mental health support</h1>
      <v-row justify="center"
        ><v-btn outlined rounded color="white" x-large>Book now</v-btn></v-row
      >
    </v-img>
    <v-container>
      <v-row>
        <v-col cols="3">
          <v-card id="mentalHealth" height="15vw"
            ><h2>Depression</h2>
            <h3 id="hovTxt">
              place holder text
            </h3></v-card
          >
        </v-col>
        <v-col cols="3">
          <v-card
            id="mentalHealth"
            height="30vw"
            img="https://valahealth.com/img/aspects-counselling-2.jpg"
            ><h2 class="wh2">Relationships</h2>
            <h3 id="hovTxt" class="wh2">
              place holder text
            </h3></v-card
          >
        </v-col>
        <v-col cols="3">
          <v-card id="mentalHealth" height="15vw"
            ><h2>Stress</h2>
            <h3 id="hovTxt">
              place holder text
            </h3></v-card
          >
        </v-col>
        <v-col cols="3">
          <v-card
            id="mentalHealth"
            height="30vw"
            img="https://valahealth.com/img/aspects-counselling-4.jpg"
            ><h2 class="wh2">Anxiety</h2>
            <h3 id="hovTxt" class="wh2">
              place holder text
            </h3></v-card
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <v-card
            id="mentalHealth"
            class="mentalCard"
            height="30vw"
            img="https://valahealth.com/img/aspects-counselling-1.jpg"
            ><h2 class="wh2">Self-Esteem</h2>
            <h3 id="hovTxt" class="wh2">
              place holder text
            </h3></v-card
          >
        </v-col>
        <v-col cols="3">
          <v-card id="mentalHealth" height="15vw"
            ><h2>Addiction</h2>
            <h3 id="hovTxt">
              place holder text
            </h3></v-card
          >
        </v-col>
        <v-col cols="3">
          <v-card
            id="mentalHealth"
            class="mentalCard"
            height="30vw"
            img="https://valahealth.com/img/aspects-counselling-3.jpg"
            ><h2 class="wh2">Grief</h2>
            <h3 id="hovTxt" class="wh2">
              place holder text
            </h3></v-card
          >
        </v-col>
        <v-col cols="3">
          <v-card id="mhLast" height="15vw"><h2>... and more</h2></v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container id="valaInfCont">
      <v-row justify="center">
        <v-col cols="auto">
          <v-card class="valaInf" id="valaInfW">
            <h1>Welcome to Vala</h1>
            <h3>
              Vala is an online consulting service that enables people to have
              health and social care appointments from home or wherever is
              convenient.
            </h3>
            <v-btn outlined rounded large>About Us</v-btn>
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card
            class="valaInf"
            img="https://cdn.discordapp.com/attachments/702469113825460295/712651293222633482/unknown.png"
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
              doctor just right for you
            </h4>
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card class="valaInf" id="valaInfW">
            <h2>Ready to speak to Vala?</h2>
            <v-btn outlined rounded large id="valaInfBtn">Book Now</v-btn>
            <h2>
              Before booking can you run a survey and find the doctor that is
              just right for you!
            </h2>
            <v-btn outlined rounded large id="valaInfBtn">Run Survey</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    isActive: false,
  }),
};
</script>

<style lang="scss">
#body {
  min-height: 100vh;
  background: linear-gradient(0, #0298c8 14%, #4cebe7 48%, #0198c8 83%);
}

#banner {
  padding-top: 5%;
  margin: 5% 0;
  h1 {
    text-align: center;
    color: white;
    margin-bottom: 5%;
    font-family: walkway-black;
  }
}

#mentalHealth,
#mhLast {
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    position: absolute;
    transition: 0.3s;
  }
  .wh2 {
    color: white;
  }
  #hovTxt {
    text-align: center;
    opacity: 0;
    transition: 0.3s;
  }
}
#mentalHealth:hover {
  h2 {
    opacity: 0;
    transition: 0.3s;
  }
  #hovTxt {
    opacity: 1;
    transition: 0.3s;
  }
}
.mentalCard {
  margin-top: -15vw;
}

#valaInfCont {
  margin: 5% auto;
}
.valaInf {
  width: 80vw;
  height: 50vw;
  text-align: center;
  padding: 10%;
  background: rgba(243, 243, 243, 0.8);
  h1 {
    margin-bottom: 5%;
    font-size: 225%;
  }
  h3 {
    margin-bottom: 10%;
    font-size: 150%;
  }
  h4 {
    font-size: 130%;
  }
  h2 {
    margin-bottom: 5%;
  }
  #valaInfBtn {
    margin-bottom: 5%;
  }
}
#valaInfW {
  background: rgba(243, 243, 243, 0.8);
}
#valaInfB {
  background: rgba(9, 205, 230, 0.8);
}

@media (min-width: 960px) {
  .valaInf {
    width: 30vw;
    height: 25vw;
  }
}
@media (min-width: 1904px) {
  .valaInf {
    width: 40vw;
    height: 25vw;
  }
}
@media (min-width: 2172px) {
  .valaInf {
    width: 30vw;
    height: 25vw;
  }
}
</style>
