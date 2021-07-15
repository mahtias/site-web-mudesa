<template>
<div>

  <table class="table table-bordered table-striped" >
    <thead>
    <tr>
      <th>Date du rapport </th>
      <th>Heure du rapport</th>
      <th>Fichier</th>
      <!-- <th>Action</th> -->
    </tr>
    </thead>

    <tbody>
    <tr class="odd gradeX" v-for="rapport in gettersDocuments"
        :key="rapport.id">

        <td> {{rapport.date_rapport || 'Non Renseigné'}}</td>
        <td> {{rapport.heure_rapport || 'Non Renseigné'}}</td>

      <td >
        <!-- {{rapport.fichier_join}} -->
        <a v-if="rapport.fichier_join" :href="rapport.fichier_join" class="btn btn-default" target="__bank">
           <span class=""> <i class="far fa-folder-open"></i> </span>
        </a>
      </td>
    </tr>
    </tbody>
  </table>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  data() {
    return{

    }
    
  },
  created(){

  },
  computed:{
...mapGetters("Utilisateurs",["gettersDocuments"])
  },
  methods:{

  }
}
</script>