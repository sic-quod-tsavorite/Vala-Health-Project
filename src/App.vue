<template>
  <v-app>
    <v-app-bar id="header"
      app
      color="white"
      dark>
<v-spacer></v-spacer>
<div class="d-flex-shrink-1">
<router-link class="routerLink" to="/">
        <v-img
          alt="Name"
          class="dmt" 
          contain
          position
          min-height="100"
          min-width="100"
          src="./assets/logo.svg"
          height="100"
          width="100"
          />
          </router-link>

      </div>
        <v-spacer></v-spacer>
   
 
       <v-btn id="loginbtn"> <router-link class="routerLink" to="/login"> <p id="kek"> Login</p></router-link> </v-btn> 
       <v-btn id="aboutbtn"> <router-link class="routerLink" to="/about">About</router-link> </v-btn>

  
    </v-app-bar>

    <v-content>
       <router-view/>
    </v-content>
    

    <footer class="fot" id="foot">

        <v-spacer></v-spacer>

    </footer>

  </v-app>
</template>

<script>
import Vue from 'vue'
import VueKinesis from 'vue-kinesis'
 
Vue.use(VueKinesis)
export default {

};
</script>

<style lang="scss">
@media (min-width: 1024px) {
.routerLink {
  text-decoration: none;
  :hover {
    color: white;
  }
}


#loginbtn {
  
  @include Txtbox(Raleway);
  
  font-weight: 500;
  text-align: center;
  background-color: #fff;
  border-radius: 100px;
  color: #48a0f7;
  position: relative;
  line-height: 18px;
  outline: none;
  border: 2px solid;
  font-size: 15px;
  padding: 9px 25px;
  text-transform: capitalize;
  
  }
  
  #loginbtn:hover {
  transition: all .2s ease;
  border-color: #48a0f7;
  color: white;
  @include txtColor(map-get($colorz, white));
  background-image: linear-gradient(-120deg,#4ceae7,#23bcd6 50%,#0298c8 95%,#0298c8);
  
}

#aboutbtn {
  margin-left: 0.3em;
  @include Txtbox(Raleway);
  font-weight: 500;
  text-align: center;
  background-color: #fff;
  border-radius: 100px;
  color: #999;
  position: relative;
  line-height: 18px;
  outline: none;
  border: 2px solid #aaa;
  font-size: 15px;
  padding: 9px 25px;
  text-transform: capitalize;

  
  }
  
  #aboutbtn:hover {
  transition: all .2s ease;
  border-color: #999;
  color: #fff;
  @include bgColor(map-get($colorz, dg));
    #kek {
    color:white;
  }
}

}

@media (max-width: 1024px) {
.routerLink {
  text-decoration: none;
}
  
}

</style>