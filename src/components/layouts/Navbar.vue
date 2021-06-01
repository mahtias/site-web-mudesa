<template>
    <div>
       <div id="top-bar" class="top-bar">
        <div class="container">
          <div class="row">
              <div class="col-lg-8 col-md-8">
                <ul class="top-info text-center text-md-left">
                    <li><i class="fas fa-map-marker-alt"></i> <p class="info-text">Info:</p>
                    
                    </li>
                </ul>
              </div>
              <!--/ Top info end -->
  
              <div class="col-lg-4 col-md-4 top-social text-center text-md-right">
                <ul class="list-unstyled">
                    <li>
                      <a title="Facebook" href="https://www.facebook.com/AJARA2019">
                          <span class="social-icon"><i class="fab fa-facebook-f"></i></span>
                      </a>
                      <a title="Twitter" href="https://twitter.com/themefisher.com">
                          <span class="social-icon"><i class="fab fa-twitter"></i></span>
                      </a>
                      <a title="Instagram" href="https://instagram.com/themefisher.com">
                          <span class="social-icon"><i class="fab fa-instagram"></i></span>
                      </a>
                      <a title="Linkdin" href="https://github.com/themefisher.com">
                          <span class="social-icon"><i class="fab fa-github"></i></span>
                      </a>
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
            <div class=" col-lg-3  text-lg-left">
                <router-link :to="{name:'Accueil'}" tag="a" href="#">
                  <img loading="lazy" src="images/logo.png" alt="Constra">
                </router-link>
            </div><!-- logo end -->
  
            <div class="col-lg-9 header-right">
                <ul class="top-info-box">
                  <li>
                    <div class="info-box">
                      <div class="info-box-content">
                          <p class="info-box-title">Appel</p>
                          <p class="info-box-subtitle">(+225) 07 08 51 99 98</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="info-box">
                      <div class="info-box-content">
                          <p class="info-box-title">Email Us</p>
                          <p class="info-box-subtitle">mudesa@mudesa.com</p>
                      </div>
                    </div>
                  </li>
                  <li class="last">
                    <div class="info-box last">
                      <div class="info-box-content">
                          <p class="info-box-title">Appel</p>
                          <p class="info-box-subtitle">(+225) 07 88 01 18 87</p>
                      </div>
                    </div>
                  </li>
                  <li class="header-get-a-quote">
                     
                    <a class="btn btn-primary" href="contact.html">Get A Quote</a>
                  </li>
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
                          <router-link :to="{name:'Accueil'}" tag="a" class="nav-link dropdown-toggle" data-toggle="dropdown">Accueil <i class=""></i></router-link>
                          <!-- <ul class="dropdown-menu" role="menu">
                            <li class="active"><a href="index.html">Home One</a></li>
                            <li><a href="index-2.html">Home Two</a></li>
                          </ul> -->
                      </li>

                      <li class="nav-item dropdown">
                          <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Presentation <i class="fa fa-angle-down"></i></a>
                          <ul class="dropdown-menu" role="menu">
                            <li><a href="about.html">Mots du president</a></li>
                            <li><a href="team.html">Histoire de la mutuelle</a></li>
                            <li><a href="testimonials.html">Le bureau</a></li>
                            <!-- <li><a href="faq.html">Faq</a></li>
                            <li><a href="pricing.html">Pricing</a></li> -->
                          </ul>
                      </li>
              
                      <li class="nav-item dropdown">
                          <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Projets <i class="fa fa-angle-down"></i></a>
                          <ul class="dropdown-menu" role="menu">
                            <li><a href="projects.html">tous les projets</a></li>
                            <li><a href="projects-single.html">Projets</a></li>
                          </ul>
                      </li>
              
                      <li class="nav-item dropdown">
                          <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Activités  <i class="fa fa-angle-down"></i></a>
                          <ul class="dropdown-menu" role="menu">
                            <li><a href="services.html">cérémonie</a></li>
                            <li><a href="service-single.html">Organisations socio-culturelles</a></li>
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
                         <li class="nav-item"><a class="nav-link" href="#">Nouvelle Adhésion </a></li>

                      <li class="nav-item dropdown">
                          <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Doc & Rapport <i class="fa fa-angle-down"></i></a>
                          <ul class="dropdown-menu" role="menu">
                            <li><a href="news-left-sidebar.html">Rapport</a></li>
                            <li><a href="news-right-sidebar.html">compte-rendu (CR) </a></li>
                            <li><a href="news-single.html">Autres</a></li>
                          </ul>
                      </li>
              
                     <li class="nav-item dropdown">
                          <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Galerie <i class="fa fa-angle-down"></i></a>
                          <ul class="dropdown-menu" role="menu">
                            <li><a href="news-left-sidebar.html">photos</a></li>
                            <li><a href="news-right-sidebar.html">video</a></li>
                            <!-- <li><a href="news-single.html">Autres</a></li> -->
                          </ul>
                      </li>
                      <!-- <li class="nav-item"><a class="nav-link" href="contact.html">Apropos</a></li> -->

                      <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>

                    </ul>
                </div>
              </nav>
          </div>
          <!--/ Col end -->
        </div>
        <!--/ Row end -->

        <div class="nav-search">
          <span id="search"><i class="fa fa-search"></i></span>
        </div><!-- Search end -->

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