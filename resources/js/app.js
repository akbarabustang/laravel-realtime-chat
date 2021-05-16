/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

import Echo from 'laravel-echo';

window.Echo = new Echo({
  broadcaster: 'pusher',
  key: process.env.MIX_PUSHER_APP_KEY,
  cluster: process.env.MIX_PUSHER_APP_CLUSTER,
  forceTLS: true,
  encrypted: true
});


import VueChatScroll from 'vue-chat-scroll';

Vue.use(VueChatScroll);

Vue.component('message-component', require('./components/MessageComponent.vue').default);

const app = new Vue({
  el: '#app',
  data: {
    message: '',
    chat: {
      message: []
    }
  },
  methods: {
    send() {
      if (this.message) {
        this.chat.message.push(this.message)
        this.message = ''

        console.log(this.chat.message)
      }
    }
  },
  mounted() {
    window.Echo.private('chat')
    .listen('.Chat', (e) => {
        console.log(e)
    });
  }
});
