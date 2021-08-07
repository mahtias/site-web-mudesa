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

<section id="news" class="news">
  <div class="container">
    <div class="">
        <div class=""  id="color-form" style="margin-top:30px;">
          <h1 class="" style="margin-left:500px;margin-top:-30px;" id="form-d"> Les membres du bureau</h1>
          <h3 class="section-sub-title"></h3>
        </div>
    </div>
    <!-- <div class="row text-center">
        <div class="col-12">
          <h2 class="section-title">le bureau et les differents poste</h2>
          <h3 class="section-sub-title"></h3>
        </div>
    </div> -->

     <table class="table table-bordered table-striped" >

         <tbody>
           <tr>
  <img class="image" v-for="(image, i) in images" :src="image" :key="i" @click="index = i">
    
  <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
  </tr>
         </tbody>
     </table>
  </div>
  <!--/ Container end -->
</section>
    </div>
</template>
<script>

import VueGallerySlideshow from 'vue-gallery-slideshow';
import image1 from "../../../public/Urls/images/dossierImage/image1.jpg";
import image11 from "../../../public/Urls/images/dossierImage/image11.jpg";
import image3 from "../../../public/Urls/images/dossierImage/image3.jpg";
import image2 from "../../../public/Urls/images/dossierImage/image2.jpg";
import image4 from "../../../public/Urls/images/dossierImage/image4.jpg";
import image5 from "../../../public/Urls/images/dossierImage/image5.jpg";
import image6 from "../../../public/Urls/images/dossierImage/image6.jpg";
import image8 from "../../../public/Urls/images/dossierImage/image8.jpg";
export default {
  components:{
  VueGallerySlideshow
  },
    data() {
        return{
  images:[
  image1, image11,
   image3,image2,
   image4,image5,
   image6,image8

  ],
  index: null
        }
        
    },
}
</script>

<style scoped>
body {
  font-family: sans-serif;
}
#color-form{
 background-color:#fe860b ; 
 width:1530px;
 height:100px;
 padding-bottom:-100px;
  margin-left:-210px;



}
#form-d{
 color: #ffffff ; 
}
/* .image {
  width: 100px;
  height: 200px;
  background-size: cover;
  cursor: pointer;
  margin-left: 5px;
  border-radius: 3px;
  border: 1px solid lightgray;
  object-fit: contain;
} */

.row{
   font-family: sans-serif;
}
.image{
   width: 200px;
  margin-left: 50px;
  background-position: center;
  
}
</style>