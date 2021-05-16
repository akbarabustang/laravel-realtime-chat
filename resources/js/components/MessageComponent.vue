<template>
  <div>
    <li class="list-group-item" :class="className" >{{ text }}</li>
    <small class="badge float-right" :class="badgeClass">{{user}}</small>
  </div>
</template>

<script>
  export default {
    props: [
      'color',
      'text',
      'user'
    ],
    computed: {
      className() {
        return 'list-group-item-' + this.color 
      },
      getMessage() {
        console.log(this.text)
        return this.text
      },
      badgeClass() {
        return 'badge-'+this.color
      }
    },
    mounted() {
      console.log('Component message mounted.')
    }
  }
</script>
