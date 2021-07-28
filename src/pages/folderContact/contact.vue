<template>
    <div>
        <div class="">
        <div class=""  id="color-form" style="margin-top:-10px;">
          <!-- <h1 class="" > MOT DU PRESIDENT</h1> -->
          <h3 class="section-sub-title" style="margin-left:500px;margin-top:-10px;" id="form-d">Information sur le contact</h3>
        </div>
    </div>
        <div id="banner-area" class="banner-area" style="background-image:url(images/banner/banner1.jpg)">
  <div class="banner-text">
    <div class="container">
        <div class="row">
          <div class="col-lg-12">
              <div class="banner-heading">
                <h1 class="banner-title">MUtuelle pour le Developpement Economique et Sociale d 'Allongo</h1>
                <!-- <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center">
                      <li class="breadcrumb-item"><a href="#">Home</a></li>
                      <li class="breadcrumb-item"><a href="#">Company</a></li>
                      <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
                    </ol>
                </nav> -->
              </div>
          </div><!-- Col end -->
        </div><!-- Row end -->
    </div><!-- Container end -->
  </div><!-- Banner text end -->
</div><!-- Banner area end --> 


<section id="main-container" class="main-container">
  <div class="container">

    <div class="row text-center">
      <div class="col-12">
        <h2 class="section-title"></h2>
        <h3 class="section-sub-title"></h3>
      </div>
    </div>
    <!--/ Title row end -->

    <div class="row">
      <div class="col-md-4">
        <div class="ts-service-box-bg text-center h-100">
          <span class="ts-service-icon icon-round">
            <i class="fas fa-map-marker-alt mr-0"></i>
          </span>
          <div class="ts-service-box-content">
            <h4>Visit Our Office</h4>
            <p>9051 Constra Incorporate, USA</p>
          </div>
        </div>
      </div><!-- Col 1 end -->

      <div class="col-md-4">
        <div class="ts-service-box-bg text-center h-100">
          <span class="ts-service-icon icon-round">
            <i class="fa fa-envelope mr-0"></i>
          </span>
          <div class="ts-service-box-content">
            <h4>Email</h4>
            <p>mudesa@mudesa.com</p>
          </div>
        </div>
      </div><!-- Col 2 end -->

      <div class="col-md-4">
        <div class="ts-service-box-bg text-center h-100">
          <span class="ts-service-icon icon-round">
            <i class="fa fa-phone-square mr-0"></i>
          </span>
          <div class="ts-service-box-content">
            <h4>Contact</h4>
            <p>(+9) 8</p>
          </div>
        </div>
      </div><!-- Col 3 end -->

    </div><!-- 1st row end -->

    <!-- <div class="gap-60"></div> -->
    <div class="mapouter"> 
      <div class="gmap_canvas">
        <iframe width="2000" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
        </iframe>
        <a href="https://fmovies-online.net"></a><br>
      
      <a href="https://www.embedgooglemap.net">embed google</a>
     
      </div>
      </div>

    <!-- <div class="google-map">
      <div id="map" class="map" data-latitude="40.712776" data-longitude="-74.005974" data-marker="images/marker.png" data-marker-name="Constra"></div>
    </div> -->

    
  </div><!-- Conatiner end -->
</section><!-- Main container end -->

  <form id="contact-form" action="#" method="post" role="form">
          <div class="error-container" style="margin-left:110px;">
            <h2 class="btn btn-primary solid blank">FORMULAIRE DE CONTACT</h2>

<p>Pour toute question ou demande d'information, vous pouvez nous appeler ou nous contacter avec le formulaire ci-dessous</p>
          </div>
          <!-- <div class="row" style="margin-left:300px;"> -->
            <div class="col-md-4" style="margin-left:90px;">
              <div class="form-group">
                <label>Nom <code>*</code></label>
                <input class="form-control form-control-name" v-model="formData.nom" placeholder="" type="text" required>
              </div>
            </div>
             <div class="col-md-4" style="margin-left:90px;">
              <div class="form-group">
                <label>Prenom <code>*</code></label>
                <input class="form-control form-control-name" v-model="formData.prenom" placeholder="" type="text" required>
              </div>
            </div>
          <!-- </div> -->
          
            <div class="col-md-4" style="margin-left:90px;">
              <div class="form-group">
                <label>Sujet <code>*</code></label>
                <input class="form-control form-control-email" v-model="formData.sujet" placeholder="" type="email"
                  required>
              </div>
            </div>
                    <!-- <div class="col-md-4">
                      <div class="form-group">
                        <label>Sujet <code>*</code></label>
                        <input class="form-control form-control-email" name="email" id="email" placeholder="" type="email"
                          required>
                      </div>
                    </div> -->
            
            
          
          <div style="margin-left:600px; margin-top:-260px;" class="col-md-6">
            <label>Message <code>*</code></label>
            <textarea class="form-control form-control-message" v-model="formData.message" placeholder="" rows="11"
              required></textarea>
          </div>
          <div class="text-right" style="margin-top:-20px;"><br>
            <button class="btn btn-primary solid blank" @click.prevent="ajouterContatLocal">Send Message</button>
          </div>
        </form>
<notifications />
    </div>
</template>
<script>
import {mapGetters , mapActions} from "vuex"
export default {
  data() {
    return{
     formData:{
       nom:"",
       prenom:"",
       sujet:"",
       message:""
     }
    }
    
  },
  created(){

  },
  components:{
...mapGetters("Utilisateurs", ['gettersContact',"getContact"])
  },
  methods:{
...mapActions("Utilisateurs",["ajouterContact"]),

ajouterContatLocal(){
 this.ajouterContact(this.formData)
  this.formData={
       nom:"",
       prenom:"",
       sujet:"",
       message:""
  }
}
  }
}
</script>

<style scoped>
#contact-form{
  color: #1e1e1e;
}
.mapouter{position:relative;text-align:right;height:500px;width:1000;
}
.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:2000;
}
#color-form{
 background-color:#fe860b ; 
 width:1730px;
 height:100px;
 padding-bottom:-100px;
  margin-left:-210px;



}
#form-d{
 color: #ffffff ; 
}
</style>