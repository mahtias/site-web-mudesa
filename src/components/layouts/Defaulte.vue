<template>
<div>
    <Navbar></Navbar>
<Footer></Footer>
    <dvi id="content">
       <header class="header-area">  
           <br>
       </header>
       <slot/>

    </dvi>
    </div>
</template>
<script>
import Navbar from "./Navbar"
import Footer from "./Footer"
export default {
    components:{
        Navbar,
        Footer
    },
   beforeCreate () {
     if (!this.$store.state.Utilisateurs.isLoggedIn) {
        this.$router.push({ name: 'Accueil' })
     }
  },
}
</script>