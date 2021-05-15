/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

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
  }
});
