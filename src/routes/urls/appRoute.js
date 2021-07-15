import Accueil from '../../pages/Accueil.vue'
import motPresident from '../../pages/folderPresentation/motPresident.vue'
import photo from '../../pages/folderGalerie/photo.vue'
import video from '../../pages/folderGalerie/video.vue'
import buerau from '../../pages/folderPresentation/bureau.vue'
import HistoireMutuelle from '../../pages/folderPresentation/HistoireMutuelle.vue'
import adhesion from '../../pages/folderAdhesion/adhesion.vue'
import allProjetct from '../../pages/folderProject/allProject.vue'
import singleProject from '../../pages/folderProject/singleProject.vue'
import ceremonie from '../../pages/folderActivité/ceremonie.vue'
import socio_culturelle from '../../pages/folderActivité/socio_culturelle.vue'
import contact from '../../pages/folderContact/contact.vue'
import document_rapport from '../../pages/folderRapport/document_rapport.vue'
import cr from '../../pages/folderRapport/cr.vue'
import our_people from '../../pages/folderPresentation/our_people.vue'
import Apropos from "../../pages/folderApropos/Apropos.vue"

const appRoute = [

    {
        path: "/accueil",
        name: "url_accueil",
        component: Accueil
    },
    {
        path:"/apropos-mudesa",
        name:"propos_mudesa",
        component:Apropos
    },
    {
        path:"/our-people",
        name:"pople",
        component:our_people
    },
    {
        path:"voir-cr",
        name:"url_cr",
        component:cr
    },
    {
        path:"/doc-rapport",
        name:"rapport",
        component:document_rapport
    },
    {
        path:"/inserer-video",
        name:"url_video",
        component:video
    },
    {
        path:"/contact",
        name:"contcat",
        component:contact
    },
    {
        path:"/ceremonie",
        name:"ceremoni",
        component:ceremonie
    },
    {
        path:"/creation-socio-cuturelle",
        name:"socio_cuturel",
        component:socio_culturelle
    },
    {
        path:"/mot-president",
        name:"mot_president",
        component:motPresident
    },
    {
        path:"/all-projet",
        name:"all_projet",
        component:allProjetct
    },
    {
        path:"/single-project",
        name:"single_project",
        component:singleProject
    },
    {
        path:"/photo",
        name:"url_photo",
        component:photo
    },
    {
        path:"/poste-bureau",
        name:"poste_bureau",
        component:buerau
    },
    {
        path:"/histoire-mutuelle",
        name:"histoire_mutuelle",
        component:HistoireMutuelle
    },
    {
        path:"/formulaire-adhesion",
        name:"urls_adhesion",
        component:adhesion
    }



]

export default appRoute;