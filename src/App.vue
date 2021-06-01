<template>
<div>
     <Navbar></Navbar>
    <router-view></router-view>
<Footer></Footer>
</div>
</template>

<script>
import Navbar from "../src/components/layouts/Navbar"
import Footer from "../src/components/layouts/Footer"
//import Milieu from "../src/components/layouts/Milieu"
//const default_layout = "default"
const default_layout = "default"
export default {
    components:{
        Navbar,
       // Milieu,
        Footer
    },

  computed:{
    layout(){
      return (this.$route.meta.layout || default_layout) + '-layout';
    }
  },

}
</script>
