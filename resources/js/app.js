/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

import axios from 'axios';
import Toaster from 'v-toaster'
import 'v-toaster/dist/v-toaster.css'
import VueChatScroll from 'vue-chat-scroll';

Vue.use(VueChatScroll);
Vue.use(Toaster, {timeout: 5000})
Vue.prototype.$userId = document.querySelector("meta[name='user']").getAttribute('content');
Vue.component('message-component', require('./components/MessageComponent.vue').default);

const app = new Vue({
  el: '#app',
  data: {
    message: '',
    chat: {
      message: [],
      user: [],
      colors: [],
      time: []
    },
    typing: '',
    onlineUser: 0
  },
  watch: {
    message() {
      window.Echo.private('chat')
                  .whisper('typing', {
                    msg: this.message,
                    user: this.$userId
                  })
    }
  },
  methods: {
    send() {
      if (this.message) {
        this.chat.message.push(this.message)
        this.chat.user.push('you')
        this.chat.colors.push('success')
        this.chat.time.push(this.getTime())

        axios.post('send', {
          message: this.message
        })
        .then(res => {
          console.log(res)
          this.message = ''
        })
        .catch(err => {
          console.log(err)
        })
      }
    },

    getTime() {
      let time = new Date()
      return time.getHours()+':'+ time.getMinutes()
    }
  },
  mounted() {
    window.Echo.private('chat')
                .listen('.chat-created', (e) => {
                  this.chat.message.push(e.message)
                  this.chat.user.push(e.user)
                  this.chat.colors.push('warning')
                  this.chat.time.push(this.getTime())
                })
                .listenForWhisper('typing', (e) => {
                  if (e.msg) {
                    this.typing = e.user + ' is typing..'
                  } else {
                    this.typing = ''
                  }
                })
  
    window.Echo.join('chat')
                .here((users) => {
                  this.onlineUser = users.length
                })
                .joining((user) => {
                  this.onlineUser += 1
                  this.$toaster.success(user.name + ' joined the room')
                })
                .leaving((user) => {
                  this.onlineUser -= 1
                  this.$toaster.warning(user.name + ' left the room')
                })
  }

});
