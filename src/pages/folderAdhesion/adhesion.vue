<template>
<div>
 <div class="gap-40"></div>

    <div class="row" style="margin-left:200px;">
      <div class="col-md-10">
        <h3 class="column-title" align="center">veillez remplir ce formulaire d'adhesion</h3>
        <!-- contact form works with formspree.io  -->
        <!-- contact form activation doc: https://docs.themefisher.com/constra/contact-form/ -->
        <form id="contact-form" action="#" method="post" role="form">
          <div class="error-container"></div>
          <div class="row">
            <div class="col-md-4">
              <div class="form-group">
                <label>Nom</label>
                <input class="form-control form-control-name" name="name" id="name" placeholder="" type="text" required>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label>Prenom</label>
                <input class="form-control form-control-email" name="email" id="email" placeholder="" type="text"
                  required>
              </div>
            </div>

              <div class="col-md-4">
              <div class="form-group">
                <label>date naissance</label>
                <input class="form-control form-control-name" name="name" id="name" placeholder="" type="text" required>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="form-group">
                <label>Montant d'adhesion</label>
                <input class="form-control form-control-email" name="email" id="email" placeholder="" type="text"
                  required>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label>Numero du telephone</label>
                <input class="form-control form-control-subject" name="subject" id="subject" placeholder="" required>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label>Profession</label>
                <select  class="form-control form-select-profession">
               
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
            <label>Message</label>
            <textarea class="form-control form-control-message" name="message" id="message" placeholder="" rows="10"
              required></textarea>
          </div>
          <div class="text-right"><br>
            <button class="btn btn-primary solid blank" type="submit">Send Message</button>
          </div>
        </form>
      </div>

    </div>
    </div>
</template>
<script>
export default {
    setup() {
        
    },
}
</script>