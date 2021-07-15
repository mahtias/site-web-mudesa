<template>
    <div>
       <div id="top-bar" class="top-bar">
        <div class="container">
          <div class="row">
              <div class="col-lg-8 col-md-8">
                <ul class=" " v-for="item  in gettersMessage" :key="item.id">
                    <i class=""></i> <marquee behavior="" direction="left" class="btn btn-primary solid blank" style="color:red; width:1200px;" >{{item.libelle}}</marquee>
                    
                </ul>
              </div>
              <!--/ Top info end -->
  
              <div class="col-lg-4 col-md-4 top-social text-center text-md-right">
                <ul class="list-unstyled">
                    <li>
                      <a title="Facebook" href="https://www.facebook.com/AJARA2019">
                          <span class="social-icon"><i class="fab fa-facebook-f"></i></span>
                      </a>
                      <!-- <a title="Twitter" href="https://twitter.com/themefisher.com">
                          <span class="social-icon"><i class="fab fa-twitter"></i></span>
                      </a>
                      <a title="Instagram" href="https://instagram.com/themefisher.com">
                          <span class="social-icon"><i class="fab fa-instagram"></i></span>
                      </a>
                      <a title="Linkdin" href="https://github.com/themefisher.com">
                          <span class="social-icon"><i class="fab fa-github"></i></span>
                      </a> -->
                    </li>
                </ul>
              </div>
              <!--/ Top social end -->
          </div>
          <!--/ Content row end -->
        </div>
        <!--/ Container end -->
    </div>
    <!--/ Topbar end -->

    <!-- Header start -->
<header id="header" class="header-one">
  <div class="bg-white">
    <div class="container">
      <div class="">
          <div class="row align-items-center ">
            <div class="">
                <router-link :to="{name:'url_accueil'}" tag="a">
                  <img  src="images/logo.png" alt="">
                </router-link>
            </div><!-- logo end -->
  
            <div class="col-lg-9 header-right">
                <ul class="top-info-box">
                  <li>
                    <div class="info-box">
                      <div class="info-box-content">
                          <p class="info-box-title">Contact</p>
                          <p class="info-box-subtitle">(+225) 07 07 22 33 01</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="info-box">
                      <div class="info-box-content">
                          <p class="info-box-title">E-mail</p>
                          <p class="info-box-subtitle">mudesa@mudesa.com</p>
                      </div>
                    </div>
                  </li>
                  <li class="last">
                    <div class="info-box last">
                      <div class="info-box-content">
                          <p class="info-box-title">Contact</p>
                          <p class="info-box-subtitle">(+225) 07 88 02 63 05</p>
                      </div>
                    </div>
                  </li>
                  <!-- <li class="header-get-a-quote">
                     
                    <a class="btn btn-primary" href="contact.html">Get A Quote</a>
                  </li> -->
                </ul><!-- Ul end -->
            </div><!-- header right end -->
          </div><!-- logo area end -->
  
      </div><!-- Row end -->
    </div><!-- Container end -->
  </div>

  <div class="site-navigation">
    <div class="container">
        <div class="row">
          <div class="col-lg-12">
              <nav class="navbar navbar-expand-lg navbar-dark p-0">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div id="navbar-collapse" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav mr-auto">
                      <li class="nav-item dropdown active">
                          <router-link :to="{name:'url_accueil'}" tag="a" class="nav-link dropdown-toggle" data-toggle="dropdown">Accueil <i class=""></i></router-link>
                          <!-- <ul class="dropdown-menu" role="menu">
                            <li class="active"><a href="index.html">Home One</a></li>
                            <li><a href="index-2.html">Home Two</a></li>
                          </ul> -->
                      </li>

                      <li class="nav-item dropdown">
                          <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Presentation <i class="fa fa-angle-down"></i></a>
                          <ul class="dropdown-menu" role="menu">
                            <li><router-link :to="{name:'pople'}" tag="a" href="#">Our People</router-link></li>
                            <li><router-link :to="{name:'mot_president'}" tag="a" href="#">Mots du president</router-link></li>
                            <li><router-link :to="{name:'histoire_mutuelle'}" href="#">Histoire de la mutuelle</router-link></li>
                            <li><router-link :to="{name:'poste_bureau'}" href="#">Le bureau</router-link></li>
                            <!-- <li><a href="faq.html">Faq</a></li>
                            <li><a href="pricing.html">Pricing</a></li> pste_bureau -->
                          </ul>
                      </li>
              
                      <li class="nav-item dropdown">
                          <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Projets <i class="fa fa-angle-down"></i></a>
                          <ul class="dropdown-menu" role="menu">
                            <li><router-link :to="{name:'all_projet'}" tag="a" href="#">tous les projets</router-link></li>
                            <!-- <li><router-link :to="{name:'single_project'}" tag="a" href="#">Projets</router-link></li> -->
                          </ul>
                      </li>
              
                      <li class="nav-item dropdown">
                          <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Activités  <i class="fa fa-angle-down"></i></a>
                          <ul class="dropdown-menu" role="menu">
                            <li><router-link :to="{name:'ceremoni'}" tag="a" href="#">cérémonie</router-link></li>
                            <li><router-link :to="{name:'socio_cuturel'}" tag="a" href="#">Organisations socio-culturelles</router-link></li>
                          </ul>
                      </li>
              
                      <!-- <li class="nav-item dropdown">
                          <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Features <i class=""></i></a>
                          <ul class="dropdown-menu" role="menu">
                            <li><a href="typography.html">Typography</a></li>
                            <li><a href="404.html">404</a></li>
                            <li class="dropdown-submenu">
                                <a href="#!" class="dropdown-toggle" data-toggle="dropdown">Parent Menu</a>
                                <ul class="dropdown-menu">
                                  <li><a href="#!">Child Menu 1</a></li>
                                  <li><a href="#!">Child Menu 2</a></li>
                                  <li><a href="#!">Child Menu 3</a></li>
                                </ul>
                            </li>
                          </ul>
                      </li> -->
                         <li class="nav-item"><router-link :to="{name:'urls_adhesion'}" tag="a" class="nav-link" href="#">Espace Adhésion </router-link></li>

                      <li class="nav-item dropdown">
                          <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Doc & Rapport <i class="fa fa-angle-down"></i></a>
                          <ul class="dropdown-menu" role="menu">
                            <li><router-link :to="{name:'rapport'}" tag="a" href="#">Rapport</router-link></li>
                            <li><router-link :to="{name:'url_cr'}" tag="a" href="#">compte-rendu (CR) </router-link></li>
                            <!-- <li><a href="news-single.html">Autres</a></li> -->
                          </ul>
                      </li>
              
                     <li class="nav-item dropdown">
                          <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Evenement <i class="fa fa-angle-down"></i></a>
                          <ul class="dropdown-menu" role="menu">
                            <li><router-link :to="{name:'url_photo'}" tag="a" href="#">Image <img loading="" src="" alt=""> </router-link>
                            
                            </li>
                            <li><router-link :to="{name:'url_video'}" tag="a" href="#">video</router-link></li>
                            <!-- <li><a href="news-single.html">Autres</a></li> -->
                          </ul>
                      </li>
                      <li class="nav-item"><router-link :to="{name:'propos_mudesa'}" tag="a" class="nav-link" href="#">Apropos</router-link></li>

                      <li class="nav-item"><router-link :to="{name:'contcat'}" tag="a" class="nav-link" href="#">Contact</router-link></li>

                    </ul>
                </div>
              </nav>
          </div>
          <!--/ Col end -->
        </div>
        <!--/ Row end -->

        <!-- <div class="nav-search">
          <span id="search"><i class="fa fa-search"></i></span>
        </div> -->

        <div class="search-block" style="display: none;">
          <label for="search-field" class="w-100 mb-0">
            <input type="text" class="form-control" id="search-field" placeholder="Type what you want and enter">
          </label>
          <span class="search-close">&times;</span>
        </div><!-- Site search end -->
    </div>
    <!--/ Container end -->

  </div>
  <!--/ Navigation end -->
</header>
<!--/ Header end -->
    </div>
</template>
<script>
import {mapGetters , mapActions} from "vuex"
export default {
  data() {
    return{

    }
    
  },
  created(){
    this.getMessage()
    this.getDocument()
  },
  computed:{
...mapGetters("Utilisateurs", ["gettersMessage",""])
  },


  methods:{
...mapActions("Utilisateurs",["getMessage","getDocument"])




  }
}
</script>