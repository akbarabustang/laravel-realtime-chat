/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

import axios from 'axios';

import VueChatScroll from 'vue-chat-scroll';

Vue.use(VueChatScroll);

Vue.component('message-component', require('./components/MessageComponent.vue').default);

const app = new Vue({
  el: '#app',
  data: {
    message: '',
    chat: {
      message: [],
      user: [],
      colors: []
    }
  },
  methods: {
    send() {
      if (this.message) {
        this.chat.message.push(this.message)
        this.chat.user.push('you')
        this.chat.colors.push('success')

        axios.post('send', {
          message: this.message
        })
        .then(res => {
          // console.log(res)
          this.message = ''
        })
        .catch(err => {
          console.log(err)
        })

        // console.log(this.chat.message)
      }
    }
  },
  mounted() {
    window.Echo.private('chat')
    .listen('.chat-created', e => {
      this.chat.message.push(e.message)
      this.chat.user.push(e.user)
      this.chat.colors.push('warning')
      console.log(e)
    });
  }
});
