import { asyncLoading } from 'vuejs-loading-plugin'
import apiGuest from './urls/urlAdoni'
//import router from '../../../routes/index'



export function getContact({ commit }) {
  
    //console.log(token())
    apiGuest.get('/contact').then((response) => {
      commit('GET_ALL_CONTACT', response.data)
      
    }).catch(error => console.log(error))
  
  }
  export function ajouterContact({ commit,dispatch }, formData) {
   asyncLoading (apiGuest.post('/contact', formData)).then(response => {
      if (response.status == 201) {
        console.log(response.data)
        commit('AJOUTER_CONTACT', response.data)
        dispatch('getContact')
     
        this.$app.$notify({
          title: 'success ',
          text: 'Enregistrement effectué !',
          type:"success"
        })
      }
  
    }).catch(error => console.log(error))
  }