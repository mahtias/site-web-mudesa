<template>
<div>
       
     <div class="banner-carousel banner-carousel-1 mb-0">
     <div id="banner-area" class="banner-area" style="background-image:url(images/slider-main/bg6.jpg)">
   <div class="slider-content">
        <div class="container h-100">
          <div class="row align-items-center h-100">
              <div class="col-md-12 text-center">
                <h3 class="slide-sub-title" data-animation-in="slideInRight">MUtuelle pour le Developpement Economique et Sociale d 'Allongo </h3>
                <p data-animation-in="slideInLeft" data-duration-in="1.2">
                    
                </p>
              </div>
          </div>
        </div>
    </div>
     </div>

       <div id="banner-area" class="banner-area" style="background-image:url(images/slider-main/bg8.jpg)">
   <div class="slider-content">
        <div class="container h-100">
          <div class="row align-items-center h-100">
              <div class="col-md-12 text-center">
                <h3 class="slide-sub-title" data-animation-in="slideInRight">MUtuelle pour le Developpement Economique et Sociale d 'Allongo </h3>
                <p data-animation-in="slideInLeft" data-duration-in="1.2">
                    
                </p>
              </div>
          </div>
        </div>
    </div>
     </div>
</div>
  <notifications />
 <div class="gap-40"></div>
 <!-- <div class="">
        <div class=""  id="color-form" style="margin-top:-40px;">
          <h1 class="" style="margin-left:800px;margin-top:-30px;" id="form-d">Information de l'adhérant</h1>
          <h3 class="section-sub-title"></h3>
        </div>
    </div> -->

    <div class="row" style="margin-left:200px;">
      <div class="col-md-10">
        <h3 class="btn btn-primary solid blank" style="margin-left:300px;margin-top:30px;">veillez remplir ce formulaire d'adhesion</h3>
        <!-- contact form works with formspree.io  -->
        <!-- contact form activation doc: https://docs.themefisher.com/constra/contact-form/ -->
        <form id="contact-form" action="#" method="post" role="form">
          <div class="error-container"></div>
          <div class="row">
            <div class="col-md-4">
              <div class="form-group">
                <label>Nom <code>*</code></label>
                <input class="form-control form-control-name" v-model="formData.nom_adheran" placeholder="" type="text" required>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label>Prenom <code>*</code></label>
                <input class="form-control form-control-email" v-model="formData.prenom_adheran" placeholder="" type="text"
                  required>
              </div>
            </div>

              <div class="col-md-4">
              <div class="form-group">
                <label>date naissance <code>*</code></label>
                <input class="form-control form-control-name" v-model="formData.date_naissance" placeholder="" type="date" required>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="form-group">
                <label>Montant d'adhesion <code>*</code></label>
                <input class="form-control form-control-email" v-model="formData.montant_adheran" placeholder="" type="text"
                  required>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label>Numero du telephone <code>*</code></label>
                <input class="form-control form-control-subject" v-model="formData.numero_telephone" placeholder="" required>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label>Profession <code>*</code></label>
                <select  class="form-control form-select-profession" v-model="formData.profession">
               
                  <option>selectionner votre profession</option>
                  <option>Etudiant</option>
                  <option>Elève</option>
                  <option>Fonctionnaire</option>
                  <option>Planteur</option>
                </select>
                <!-- <input class="form-control form-control-subject" name="subject" id="subject" placeholder="" required> -->
              </div>
            </div>
          </div>
          <div class="form-group">
            <label>Message <code>*</code></label>
            <textarea class="form-control form-control-message" v-model="formData.message" placeholder="" rows="8"
              required></textarea>
          </div>
          <div class="text-right"><br>
            <button class="btn btn-primary solid blank" @click.prevent="ajouterAdLocal">Send Message</button>
          </div>
        </form>
      </div>

    </div>
    </div>
</template>
<script>
import {mapGetters, mapActions} from "vuex"
export default {
    data() {
      return{
        formData:{
          message:"",
          profession:"",
          numero_telephone:"",
          montant_adheran:"",
          date_naissance:"",
          prenom_adheran:"",
          nom_adheran:""
        }
      }
        
    },
    created(){

    },
    computed:{
   ...mapGetters("Utilisateurs",["gettersAdhesions","getAdhesion"])
    },
    methods:{
...mapActions("Utilisateurs",["ajouterAdhesion"]),

ajouterAdLocal(){
  this.ajouterAdhesion(this.formData)
  this.formData={
          message:"",
          profession:"",
          numero_telephone:"",
          montant_adheran:"",
          date_naissance:"",
          prenom_adheran:"",
          nom_adheran:""

  }
}
    }
}
</script>

<style scoped>
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