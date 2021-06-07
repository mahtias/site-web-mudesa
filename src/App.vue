<template>
<div>
  <navbar></navbar>
    <router-view></router-view>

    <Footer></Footer>


</div>

</template>

<script>
import Navbar from './components/layouts/Navbar.vue';
import Footer from './components/layouts/Footer'
  const default_layout = "default"
  export default {
  components: {
     Navbar ,
     Footer
  },

    computed:{
      layout(){
        return (this.$route.meta.layout || default_layout) + '-layout';
      }
    },

  }
</script>