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
            <v-card flat height="65vh">
              <v-container>
                <v-row>
                  <v-col>
                    <v-card id="youMsg" shaped width="49%">
                      <v-card-title>You:</v-card-title>
                      <v-card-text>Example message</v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col id="docMsg">
                    <v-card id="docMsg" shaped color="#60d7fd">
                      <v-card-title>Doctor:</v-card-title>
                      <v-card-text>Example message</v-card-text>
                    </v-card>
                    <v-img
                      src="../assets/docImg2Crop.png"
                      width="20%"
                      id="msgDocImg"
                    ></v-img>
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
          <v-tab-item></v-tab-item>
          <v-tab-item>
            <Chat
              :participants="participants"
              :myself="myself"
              :messages="messages"
              :chat-title="chatTitle"
              :placeholder="placeholder"
              :colors="colors"
              :border-style="borderStyle"
              :hide-close-button="hideCloseButton"
              :close-button-icon-size="closeButtonIconSize"
              :submit-icon-size="submitIconSize"
              :submit-image-icon-size="submitImageIconSize"
              :load-more-messages="toLoad.length > 0 ? loadMoreMessages : null"
              :async-mode="asyncMode"
              :scroll-bottom="scrollBottom"
              :display-header="true"
              :send-images="true"
              :profile-picture-config="profilePictureConfig"
              @onImageClicked="onImageClicked"
              @onImageSelected="onImageSelected"
              @onMessageSubmit="onMessageSubmit"
              @onType="onType"
              @onClose="onClose"
            >
              <template v-slot:header> </template>
            </Chat>
          </v-tab-item>
          <v-tab-item>
            <v-card flat
              >You: Example messages Doctor: Example messages Type here</v-card
            >
            <v-text-field
              class="mx-4"
              flat
              label="Type here"
              solo-inverted
            ></v-text-field>
          </v-tab-item>
        </v-tabs>
        <v-btn rounded outlined>Cancel</v-btn>
      </div>
    </v-row>
  </v-content>
</template>

<script>
import { Chat } from 'vue-quick-chat';
import 'vue-quick-chat/dist/vue-quick-chat.css';

export default {
  components: {
    Chat,
  },
  data() {
    return {
      visible: true,
      participants: [
        {
          name: 'Greg',
          id: 1,
          profilePicture:
            'https://cdn.discordapp.com/attachments/294221981455220737/714826378419241021/docImg2Crop.png',
        },
        {
          name: 'Judy',
          id: 2,
          profilePicture:
            'https://cdn.discordapp.com/attachments/294221981455220737/714826474171007086/docImg3Crop.png',
        },
      ],
      myself: {
        name: 'You',
        id: 3,
        profilePicture:
          'https://lh3.googleusercontent.com/-G1d4-a7d_TY/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJPez_wX5UCJztzEUeCxOd7HBK7-jA.CMID/s83-c/photo.jpg',
      },
      messages: [
        {
          content: 'received messages',
          myself: false,
          participantId: 1,
          timestamp: {
            year: 2019,
            month: 3,
            day: 5,
            hour: 20,
            minute: 10,
            second: 3,
            millisecond: 123,
          },
        },
        {
          content: 'sent messages',
          myself: true,
          participantId: 3,
          timestamp: {
            year: 2019,
            month: 4,
            day: 5,
            hour: 19,
            minute: 10,
            second: 3,
            millisecond: 123,
          },
        },
        {
          content: 'other received messages',
          myself: false,
          participantId: 2,
          timestamp: {
            year: 2019,
            month: 5,
            day: 5,
            hour: 10,
            minute: 10,
            second: 3,
            millisecond: 123,
          },
        },
      ],
      chatTitle: 'Chat',
      placeholder: 'send your message',
      colors: {
        header: {
          bg: '#0077a4',
          text: '#fff',
        },
        message: {
          myself: {
            bg: '#fff',
            text: '#bdb8b8',
          },
          others: {
            bg: '#09bbe6',
            text: '#000',
          },
          messagesDisplay: {
            bg: '#f7f3f3',
          },
        },
        submitIcon: '#09bbe6',
        submitImageIcon: '#09bbe6',
      },
      borderStyle: {
        topLeft: '10px',
        topRight: '10px',
        bottomLeft: '10px',
        bottomRight: '10px',
      },
      hideCloseButton: true,
      submitIconSize: 25,
      closeButtonIconSize: '20px',
      asyncMode: false,
      toLoad: [
        {
          content: 'Hey, John Doe! How are you today?',
          myself: false,
          participantId: 2,
          timestamp: {
            year: 2011,
            month: 3,
            day: 5,
            hour: 10,
            minute: 10,
            second: 3,
            millisecond: 123,
          },
          uploaded: true,
          viewed: true,
          type: 'text',
        },
        {
          content: "Hey, Adam! I'm feeling really fine this evening.",
          myself: true,
          participantId: 3,
          timestamp: {
            year: 2010,
            month: 0,
            day: 5,
            hour: 19,
            minute: 10,
            second: 3,
            millisecond: 123,
          },
          uploaded: true,
          viewed: true,
          type: 'text',
        },
      ],
      scrollBottom: {
        messageSent: true,
        messageReceived: false,
      },
      displayHeader: true,
      profilePictureConfig: {
        others: true,
        myself: true,
        styles: {
          width: '30px',
          height: '30px',
          borderRadius: '50%',
        },
      },
    };
  },
  methods: {
    /*onType: function(event) {
      //here you can set any behavior
    },*/
    loadMoreMessages(resolve) {
      setTimeout(() => {
        resolve(this.toLoad); //We end the loading state and add the messages
        //Make sure the loaded messages are also added to our local messages copy or they will be lost
        //this.messages.unshift(...this.toLoad);
        this.toLoad = [];
      }, 1000);
    },
    onMessageSubmit: function(message) {
      /*
       * example simulating an upload callback.
       * It's important to notice that even when your message wasn't send
       * yet to the server you have to add the message into the array
       */
      this.messages.push(message);

      /*
       * you can update message state after the server response
       */
      // timeout simulating the request
      setTimeout(() => {
        message.uploaded = true;
      }, 2000);
    },
    onClose() {
      this.visible = false;
    },
    onImageSelected(files, message) {
      let src =
        'https://149364066.v2.pressablecdn.com/wp-content/uploads/2017/03/vue.jpg';
      this.messages.push(message);
      /**
       * This timeout simulates a requisition that uploads the image file to the server.
       * It's up to you implement the request and deal with the response in order to
       * update the message status and the message URL
       */
      setTimeout(
        (res) => {
          message.uploaded = true;
          message.src = res.src;
        },
        3000,
        { src }
      );
    },
    onImageClicked(message) {
      /**
       * This is the callback function that is going to be executed when some image is clicked.
       * You can add your code here to do whatever you need with the image clicked. A common situation is to display the image clicked in full screen.
       */
      console.log('Image clicked', message.src);
    },
  },
};
</script>

<style lang="scss">
#msgBody {
  @include bgiColor(map-get($colorz, lg2));
  height: auto;
}

#msgGreyBg {
  height: 100%;
  width: 80vw;
  background: #f3f5f5;
  position: fixed;
  margin-top: -64px;
  padding-top: 2.5%;
}

#chatBox {
  margin: 5%;
  width: 90%;
  #docMsg {
    margin: auto 0 auto auto;
  }
  #msgDocImg {
    border-radius: 50%;
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
</style>
