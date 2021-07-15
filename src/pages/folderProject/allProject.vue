<template>
    <div>

        <div id="banner-area" class="banner-area" style="background-image:url(images/banner/banner1.jpg)">
  <div class="banner-text">
    <div class="container">
        <div class="row">
          <div class="col-lg-12">
              <div class="banner-heading">
                <h1 class="banner-title">Tous les projets</h1>
                <!-- <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center">
                      <li class="breadcrumb-item"><a href="#">Home</a></li>
                      <li class="breadcrumb-item"><a href="#">Project</a></li>
                      <li class="breadcrumb-item active" aria-current="page">All Projects</li>
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
    <div class="row">
      <div class="col-12">
        <div class="shuffle-btn-group">


          <Tabs size="small">
        <TabPane label="Tous">
         <!-- <div class="col-lg-4 col-md-6 shuffle-item" data-groups="[&quot;government&quot;,&quot;healthcare&quot;]"> -->
            <div class="project-img-container">
              <a class="gallery-popup" href="images/projects/project1.jpg">
                <img class="img-fluid" src="images/projects/project1.jpg" alt="project-image">
                <span class="gallery-icon"><i class="fa fa-plus"></i></span>
              </a>
              <div class="project-item-info">
                <div class="project-item-info-content">
                  <h3 class="project-item-title">
                    <a href="projects-single.html">Capital Teltway Building</a>
                  </h3>
                  <p class="project-cat">Commercial, Interiors</p>
                </div>
              </div>
            <!-- </div> -->
          </div><!-- shuffle item 1 end -->



        </TabPane>
        <TabPane label="Santé">
           <div class="project-img-container">
              <a class="gallery-popup" href="images/projects/project2.jpg">
                <img class="img-fluid" src="images/projects/project2.jpg" alt="project-image">
                <span class="gallery-icon"><i class="fa fa-plus"></i></span>
              </a>
              <div class="project-item-info">
                <div class="project-item-info-content">
                  <h3 class="project-item-title">
                    <a href="projects-single.html">Ghum Touch Hospital</a>
                  </h3>
                  <p class="project-cat">Healthcare</p>
                </div>
              </div>
            </div>
        </TabPane>
        <TabPane label="Agricole">
           <div class="project-img-container">
              <a class="gallery-popup" href="images/projects/project3.jpg">
                <img class="img-fluid" src="images/projects/project3.jpg" alt="project-image">
                <span class="gallery-icon"><i class="fa fa-plus"></i></span>
              </a>
              <div class="project-item-info">
                <div class="project-item-info-content">
                  <h3 class="project-item-title">
                    <a href="projects-single.html">TNT East Facility</a>
                  </h3>
                  <p class="project-cat">Government</p>
                </div>
              </div>
            </div>
        </TabPane>
    </Tabs>

       
    <!-- <Tabs type="card">
        <TabPane v-for="tab in tabs" :key="tab" :label="'ad' + tab">ad{{ tab }}</TabPane>
        <Button @click="handleTabsAdd" size="small" slot="extra" class="btn btn-danger">Ajouter</Button>
    </Tabs> -->



           <!-- <v-card>
    <v-tabs
      v-model="tab"
      background-color="primary"
      dark
    >
      <v-tab
        v-for="item in items"
        :key="item.tab"
      >
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item.tab"
      >
        <v-card flat>
          <v-card-text>{{ item.content }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>  -->
          <!-- <label class="active" for="all">
            <input type="radio" name="shuffle-filter" id="all" value="all" checked="checked">Show All
          </label>
          <label for="commercial">
            <input type="radio" name="shuffle-filter" id="commercial" value="commercial">Commercial
          </label>
          <label for="education">
            <input type="radio" name="shuffle-filter" id="education" value="education">Education
          </label>
          <label for="government">
            <input type="radio" name="shuffle-filter" id="government" value="government">Government
          </label>
          <label for="infrastructure">
            <input type="radio" name="shuffle-filter" id="infrastructure" value="infrastructure">Infrastructure
          </label>
          <label for="residential">
            <input type="radio" name="shuffle-filter" id="residential" value="residential">Residential
          </label>
          <label for="healthcare">
            <input type="radio" name="shuffle-filter" id="healthcare" value="healthcare">Healthcare
          </label> -->
        </div><!-- project filter end -->


      
      </div>

      <div class="col-12">
        <div class="general-btn text-center">
          <a class="btn btn-primary" href="#">Voir  tous les projets</a>
        </div>
      </div>

    </div>

  </div>
</section>

<!-- 
 <v-card>
    <v-tabs
      v-model="tab"
      background-color="primary"
      dark
    >
      <v-tab
        v-for="item in items"
        :key="item.tab"
      >
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item.tab"
      >
        <v-card flat>
          <v-card-text>{{ item.content }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card> -->

    </div>
</template>

<script>
  export default {
    data () {
      return {
         tabs: 2,
        tab: null,
        items: [
          // { tab: 'Tous les projets', content: 'Tab 1 Content' },
          // { tab: 'Commerciale', content: 'Commerciale' },
          // { tab: 'Education', content: 'Education' },
          // { tab: 'Santé', content: 'Tab 4 Content' },
          // { tab: 'Agricole', content: 'Tab 5 Content' },
          // { tab: 'Infrastruture', content: 'Tab 6 Content' },
          // { tab: 'Seven', content: 'Tab 7 Content' },
          // { tab: 'Eight', content: 'Tab 8 Content' },
          // { tab: 'Nine', content: 'Tab 9 Content' },
          // { tab: 'Ten', content: 'Tab 10 Content' },
        ],
      }
    },
      methods: {
            handleTabsAdd () {
                this.tabs ++;
            }
        }
  }
</script>

<style scoped>

.label1{
   /* width: 200px;
  margin-left: 50px;
  background-position: center; */
}
</style>
