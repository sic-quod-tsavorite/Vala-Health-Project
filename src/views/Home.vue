<template>
  <v-content id="body">
    <v-img
      id="banner"
      src="https://cdn.discordapp.com/attachments/702469113825460295/712642781524262952/unknown.png"
      height="550px"
      width="100vw"
    >
      <h1>Affordable, private online mental health support</h1>
      <v-row justify="center"
        ><v-btn outlined rounded color="white">Book now</v-btn></v-row
      >
    </v-img>
  </v-content>
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
  margin: 25px 0 25px 0;
  h1 {
    text-align: center;
    color: white;
    margin-bottom: 5%;
  }
}
</style>
