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


  export function getAdhesion({ commit }) {
  
    //console.log(token())
    apiGuest.get('/adhesion').then((response) => {
      commit('GET_ALL_ADHESION', response.data)
      
    }).catch(error => console.log(error))
  
  }
  export function ajouterAdhesion({ commit,dispatch }, formData) {
   asyncLoading (apiGuest.post('/adhesion', formData)).then(response => {
      if (response.status == 201) {
        console.log(response.data)
        commit('AJOUTER_ADHESION', response.data)
        dispatch('getAdhesion')
     
        this.$app.$notify({
          title: 'success ',
          text: 'Enregistrement effectué !',
          type:"success"
        })
      }
  
    }).catch(error => console.log(error))
  }


   export function getMessage({ commit }) {
  
    //console.log(token())
    apiGuest.get('/message').then((response) => {
      commit('GET_ALL_MESSAGE', response.data)
      
    }).catch(error => console.log(error))
  
  }


  export function getDocument({ commit }) {
  
    //console.log(token())
    apiGuest.get('/fichier').then((response) => {
      commit('GET_ALL_DOCUMENT', response.data)
      
    }).catch(error => console.log(error))
  
  }