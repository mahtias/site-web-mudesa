
export const LOGIN_USER = (state, user) => {
    state.isLoggedIn = true
    state.user = user;
};

export const LOGOUT_USER = (state) => {
    state.isLoggedIn = false
   // state.user = user;
};

export const SET_ERROR_MESSAGE = (state, message) => {
    state.errorMessage = message
}


export const SET_CHAMP_VIDE_TRUE = state => state.champVide = true

export const SET_CHAMP_VIDE_FALSE = state => state.champVide = false

export const SET_LOADER_FALSE = state => state.loader = false

export const SET_LOADER_TRUE = state => state.loader = true

export const SET_ERROR_FALSE = state => state.error = false

export const SET_ERROR_TRUE = state => state.error = true

export const GET_ALL_ACCUEIL = (state, tableau_accueil) =>{
    state.prestations = tableau_accueil
}

export const GET_ALL_CONTACT = (state, tableau_contact) =>{
    state.Contact = tableau_contact
}
export const AJOUTER_CONTACT = (state, elementAjout) =>{
    state.Contact.unshift(elementAjout)
}

export const GET_ALL_ADHESION= (state, tableau_adhesion) =>{
    state.Adhesions = tableau_adhesion
}
export const AJOUTER_ADHESION = (state, elementAjout) =>{
    state.Adhesions.unshift(elementAjout)
}


export const GET_ALL_MESSAGE= (state, tableau_message) =>{
    state.messages = tableau_message
}

export const GET_ALL_DOCUMENT= (state, tableau_document) =>{
    state.documents = tableau_document
}

