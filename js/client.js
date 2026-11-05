// /
//  * AutoPark â€” Partie 2 : Composez votre location
//  * Starter JavaScript â€” Ã  complÃ©ter par les apprenants.
//  * Charger ce fichier dans votre HTML avec l'attribut defer.
//  *
//  * Parcours : vÃ©hicule et dates â†’ rÃ©cupÃ©ration â†’ options â†’ rÃ©capitulatif.
//  * Les tarifs sont exprimÃ©s en MAD.
//  */

// 1. CONFIGURATION : les donnÃ©es proposÃ©es par l'agence.
 
// const config = {


  

  let agences= ["Casablanca â€” Centre-ville", "Rabat â€” Agdal", "Marrakech â€” GuÃ©liz"]

  let aeroports= ["Casablanca â€” Mohammed V", "Rabat â€” SalÃ©", "Marrakech â€” MÃ©nara"]

 let options= [
    { id: "siegeBebe", nom: "SiÃ¨ge bÃ©bÃ©", prixParJour: 30 },
    {
      id: "conducteurSupplementaire",
      nom: "Conducteur supplÃ©mentaire",
      prixParJour: 200,
    },
  ]


// 2. SÃ‰LECTION : les choix de l'utilisateur, Ã  actualiser avec les formulaires.
// Les identifiants correspondent aux id dÃ©finis dans config.
// Les dates seront des chaÃ®nes au format AAAA-MM-JJ (valeur d'un input date).


/*
 * 3. Ã€ VOUS DE JOUER
 *
 * 1) SÃ©lectionner vos Ã©lÃ©ments HTML et afficher les voitures depuis config.
 * 2) Ã‰couter les Ã©vÃ©nements et mettre Ã  jour selectedConfig.
 *    Attention : la valeur d'un select est une chaÃ®ne ; voitureId est un nombre.
 *    Pour une case Ã  cocher, utiliser checked pour rÃ©cupÃ©rer true ou false.
 * 3) GÃ©rer les boutons PrÃ©cÃ©dent / Suivant et afficher une seule Ã©tape.
 * 4) Afficher les champs du mode de rÃ©cupÃ©ration sÃ©lectionnÃ©.
 *    Masquer et dÃ©sactiver les autres ; adapter required.
 * 5) Valider l'Ã©tape courante avant de passer Ã  la suivante.
 * 6) Calculer et actualiser le prix quand les choix changent.
 * 7) Afficher le rÃ©capitulatif des seuls champs concernÃ©s, puis confirmer.
 * 8) Permettre de recommencer avec les valeurs initiales.
 *
 * RÃˆGLES DU PRIX
 * - Les deux dates sont incluses : du 10 au 12 = 3 jours.
 * - Une location sur une mÃªme date = 1 jour.
 * - Le dÃ©but ne peut pas Ãªtre passÃ© ; la fin ne peut pas prÃ©cÃ©der le dÃ©but.
 * - Total = jours Ã— (prixParJour de la voiture + options par jour)
 *           + fraisFixes du mode de rÃ©cupÃ©ration.
 * - Les frais de rÃ©cupÃ©ration sont ajoutÃ©s une seule fois.
 * - Aucun renseignement supplÃ©mentaire pour le conducteur.
 * - Ne pas afficher un total numÃ©rique tant que la voiture ou les dates
 *   sont manquantes ou invalides.
 *
 * Exemple de contrÃ´le : Sandero, du 10 au 12, siÃ¨ge bÃ©bÃ©, aÃ©roport
 * â†’ 3 Ã— (250 + 30) + 150 = 990 MAD.
 */

// let voitures = JSON.parse(localStorage.getItem("voiture"));
 let  voitures= [
    {
      id: 1,
      marque: "Dacia",
      modele: "Sandero",
      immatriculation: "AUTO-001",
      categorie: "Citadine",
      prixJour: 250,
      statut: "Disponible",
    },
    {
      id: 2,
      marque: "Renault",
      modele: "Clio",
      immatriculation: "AUTO-002",
      categorie: "Citadine",
      prixJour: 300,
      statut: "Disponible",
    },
    {
      id: 3,
      marque: "Dacia",
      modele: "Duster",
      immatriculation: "AUTO-003",
      categorie: "SUV",
      prixJour: 450,
      statut: "Disponible",
    },
  ]

let modesRecuperation= [
  { id: "agence", nom: "À l’agence", fraisFixes: "Gratuit" },
  { id: "aeroport", nom: "À l’aéroport", fraisFixes: 150 },
  { id: "adresse", nom: "À une adresse", fraisFixes: 100 },
]


const selectedConfig = {
  etape: 1,
  voitureId: null,
  marqueModele:"",
  dateDebut: "",
  dateFin: "",
  modeRecuperation: "agence",

  recuperation: {
    // Mode agence uniquement.
    heureRecuperation: "",

    // Mode aeroport uniquement.
    aeroport: "",
    numeroVol: "",
    heureArrivee: "",

    // Mode adresse uniquement.
    ville: "",
    adresse: "",
    heureLivraison: "",
  },

  options: {
    siegeBebe: false,
    conducteurSupplementaire: false,
  },
}

const listeVéhicules =document.getElementById("listeVéhicules")
listeVéhicules.classList.add('grid','grid-clos-1','gap-10')

const lieuDeRécupération =document.getElementById("lieuDeRécupération")
lieuDeRécupération.classList.add('grid','grid-clos-1','gap-3')

const formillaireDeRécupiration =document.getElementById("formillaireDeRécupiration")
const optionsFacultatives =document.getElementById("optionsFacultatives")
const buttonRecommencer =document.getElementById("buttonRecommencer")
const buttonSuivant=document.getElementById("buttonSuivant")

const dateDébut=document.getElementById("dateDébut")
const dateFin =document.getElementById("dateFin")

const etapUn =document.getElementById("formulaireVéhicule")
const etapDeux =document.getElementById("configurateurEtPrix")
const etapTrois =document.getElementById("ooptions")
const etapQuatre =document.getElementById("récapitulatif")

const nombrEtapUn =document.getElementById("nombrEtapUn")
const nombrEtapDeux =document.getElementById("nombrEtapDeux")
const nombrEtapTrois =document.getElementById("nombrEtapTrois")
const nombrEtapQuatre =document.getElementById("nombrEtapQuatre")

const nomEtapUN =document.getElementById("nomEtapUN")
const nomEtapDeux =document.getElementById("nomEtapDeux")
const nomEtapTrois =document.getElementById("nomEtapTrois")
const nomEtapQuatre =document.getElementById("nomEtapQuatre")

const divEtapUN =document.getElementById("divEtapUN")
const divEtapDeux =document.getElementById("divEtapDeux")
const divEtapTrois =document.getElementById("divEtapTrois")
const divEtapQuatre =document.getElementById("divEtapQuatre")

const résuméPrix =document.getElementById("résuméPrix")


let etaps =["etapUn","etapDeux","etapTrois","etapQuatre"]

let nombre=0
let etapeActuelle=etaps[nombre]



dateDébut.addEventListener("change", (e) =>{

  const d1 = new Date(dateDébut.value);
  selectedConfig.dateDebut=d1
  console.log(d1);
  
})

dateFin.addEventListener("change",(e) =>{

  const d2 = new Date(dateFin.value);
  selectedConfig.dateFin=d2
  console.log(d2);
  

})





buttonSuivant.addEventListener("click", (e)=>{
  e.preventDefault()

  if(nombre < etaps.length-1){
    
    nombre=nombre+1
    etapeActuelle=etaps[nombre]
    styleEtaps()

  }
})



buttonRecommencer.addEventListener("click", (e)=>{
   e.preventDefault()

  if(nombre >=0){
    
    nombre=nombre-1
    etapeActuelle=etaps[nombre]
    styleEtaps()

  }
})
styleEtaps()

function styleEtaps (){

  console.log(nombre)

  if(etapeActuelle==etaps[0]){
  
    etapUn.classList.remove('hidden')
    nomEtapUN.classList.add('text-blue-700')

    
    etapDeux.classList.add('hidden')
    etapTrois.classList.add('hidden')
    etapQuatre.classList.add('hidden')

  }else if(etapeActuelle ==etaps[1]){

    etapUn.classList.add('hidden')
    etapTrois.classList.add('hidden')
    etapQuatre.classList.add('hidden')

    etapUn.classList.add('hidden')
    etapDeux.classList.remove('hidden')
    nombrEtapUn.textContent=("✓")

    nombrEtapDeux.classList.add('text-[#FFFFFF]')
    nomEtapDeux.classList.add('text-blue-700')
    divEtapDeux.classList.replace('bg-gray-200','bg-blue-700')

  }else if(etapeActuelle ==etaps[2]){

    etapUn.classList.add('hidden')
    etapDeux.classList.add('hidden')
    etapQuatre.classList.add('hidden')
    
    etapDeux.classList.add('hidden')
    etapTrois.classList.remove('hidden')

    nombrEtapUn.textContent=("✓")
    nombrEtapDeux.textContent=("✓")
    nombrEtapDeux.classList.add('text-[#FFFFFF]')
    divEtapDeux.classList.replace('bg-gray-200','bg-blue-700')

    nomEtapTrois.classList.add('text-blue-700')
    divEtapTrois.classList.replace('bg-gray-200','bg-blue-700')
    nombrEtapTrois.classList.add('text-[#FFFFFF]')

  }else if(etapeActuelle ==etaps[3]){

    etapUn.classList.add('hidden')
    etapDeux.classList.add('hidden')
    etapTrois.classList.add('hidden')

    etapTrois.classList.add('hidden')
    etapQuatre.classList.remove('hidden')

    nombrEtapUn.textContent=("✓")
    nombrEtapDeux.textContent=("✓")
    nombrEtapTrois.textContent=("✓")
    nombrEtapDeux.classList.add('text-[#FFFFFF]')
    nombrEtapTrois.classList.add('text-[#FFFFFF]')
    divEtapDeux.classList.replace('bg-gray-200','bg-blue-700')
    divEtapTrois.classList.replace('bg-gray-200','bg-blue-700')

    nomEtapQuatre.classList.add('text-blue-700')
    divEtapQuatre.classList.replace('bg-gray-200','bg-blue-700')
    nombrEtapQuatre.classList.add('text-[#FFFFFF]')

    
  }

}

affichage()
récupiration()
 styleEtaps()

function affichage(){
  voitures.forEach(voitur => {
  
    const voiture =document.createElement("div")
    listeVéhicules.append(voiture)
    voiture.classList.add('border-1', 'border-gray-300', 'border-solid','rounded-xl')

    const Sélection =document.createElement("div")
    voiture.append(Sélection)
    Sélection.classList.add('p-5')
    Sélection.classList.add('flex','justify-between')
    

    const voiturModel =document.createElement("p")
    Sélection.append(voiturModel)
    voiturModel.textContent=(voitur.categorie)
    voiturModel.classList.add('text-blue-700','bg-gray-200','w-20','rounded-md','text-center')

    const voitureRadio =document.createElement("input")
    Sélection.append(voitureRadio)
    voitureRadio.classList.add('w-20')
    voitureRadio.type='radio'
    voitureRadio.value=voitur.id
    voitureRadio.name="voiture"

















    Sélection.addEventListener(("change"),(e) =>{
      e.preventDefault()
      voiture.classList.replace(('border-1','border-gray-300'),('border-2','border-blue-500'))
      location(voitur)
    
      selectedConfig.voitureId = voitureRadio.value
      selectedConfig.marqueModele=voitur.marque

      
    })

    



    const voitureMarqueEtModele =document.createElement("p")
    voiture.append(voitureMarqueEtModele)
    voitureMarqueEtModele.textContent=(`${voitur.marque} ${voitur.modele}`)
    voitureMarqueEtModele.classList.add('px-5','font-bold','text-[#192B3F]')

    const voitureStatut =document.createElement("p")
    voiture.append(voitureStatut)
    voitureStatut.textContent=(voitur.statut)
    voitureStatut.classList.add('text-[#16835C]','px-5')

    const prixJour =document.createElement("P")
    voiture.append(prixJour)
    prixJour.textContent=(`${voitur.prixJour} MAD / jour`)
    prixJour.classList.add('text-[#2852E3]','font-bold','px-5','pb-5')
    
    function location (voitur){
      résuméPrix.replaceChildren();
      const marqueEtModele =document.createElement("h2")
      résuméPrix.append(marqueEtModele)
      marqueEtModele.textContent=(`${voitur.marque} ${voitur.modele}`)
      marqueEtModele.classList.add('font-bold','mt-5')

      const categoriEtPrix =document.createElement("p")
      categoriEtPrix.textContent=(`${voitur.categorie} MAD / jour`)
      résuméPrix.append(categoriEtPrix)
      categoriEtPrix.classList.add('text-[#697C94]')
      
      const dates =document.createElement("p")
      résuméPrix.append("dates")

      const datedéb =document.createElement("p")
      dates.append(datedéb)
      datedéb.textContent=(selectedConfig.dateDebut)
      


    }




  });

}








function récupiration(){

  modesRecuperation.forEach(mode =>{
    

    const lieu =document.createElement("article")
    lieuDeRécupération.append(lieu)
    lieu.classList.add('border-1', 'border-solid', 'border-gray-300','rounded-xl','p-5')

    const récupirationRadio =document.createElement("input")
    lieu.append(récupirationRadio)
    récupirationRadio.type='radio'
    récupirationRadio.name='radio'
    récupirationRadio.addEventListener(("change"),(e) =>{
      e.preventDefault()
      lieu.classList.replace('border-gray-300','border-blue-500')
      if(mode.id == "agence"){

        récupirationAgence()

      }else if(mode.id == "aeroport"){

        récupirationAéroport()

      }else{

        récupirationAdresse()

      }
      
    })

    const choixDeRécupiration =document.createElement("p")
    choixDeRécupiration.textContent=(mode.nom)
    lieu.append(choixDeRécupiration)
    choixDeRécupiration.classList.add('font-semibold','py-5')

    const prixDeRécupiration =document.createElement("p")
    prixDeRécupiration.textContent=(mode.fraisFixes)
    lieu.append(prixDeRécupiration)
    prixDeRécupiration.classList.add('text-blue-700','font-bold' )

  })
  function récupirationAgence (){

    const heurDeRécup =document.createElement("label")
    heurDeRécup.for='heurDeRécupiration'
    heurDeRécup.textContent=("Heure de récupération *")
    formillaireDeRécupiration.append(heurDeRécup)
    const heurDeRécupiration =document.createElement("input")
    heurDeRécupiration.type='time'
    heurDeRécupiration.name='heurDeRécupiration'
    heurDeRécupiration.classList.add('border-1','border-solid','border-gray-300','rounded-xl','w-full','h-11')
    formillaireDeRécupiration.append(heurDeRécupiration)

  }

  function récupirationAéroport (){

    const aéroport =document.createElement("label")
    aéroport.for='aéroportNom'
    aéroport.textContent=("Aéroport *")
    formillaireDeRécupiration.append(aéroport)
    const aéroportNom =document.createElement("input")
    aéroportNom.type='text'
    aéroportNom.classList.add('border-1','border-solid','border-gray-300','rounded-xl','w-full','h-11')
    formillaireDeRécupiration.append(aéroportNom)

    const vol =document.createElement("label")
    vol.for='numéroDuVol'
    vol.textContent=("Numéro du vol *")
    formillaireDeRécupiration.append(vol)
    const numéroDuVol =document.createElement("input")
    numéroDuVol.type='text'
    numéroDuVol.classList.add('border-1','border-solid','border-gray-300','rounded-xl','w-full','h-11')
    formillaireDeRécupiration.append(numéroDuVol)
  

    const heur =document.createElement("label")
    heur.for='heureArrivée'
    heur.textContent=("Heure d’arrivée *")
    formillaireDeRécupiration.append(heur)
    const heureArrivée =document.createElement("input")
    heureArrivée.type='time'
    heureArrivée.classList.add('border-1','border-solid','border-gray-300','rounded-xl','w-full','h-11')
    formillaireDeRécupiration.append(heureArrivée)

  } 


  function récupirationAdresse (){

  const ville =document.createElement("label")
  ville.for='villeDerécupiration'
  ville.textContent=("Ville *")
  formillaireDeRécupiration.append(ville)
  const villeDerécupiration =document.createElement("input")
  villeDerécupiration.type='text'
  villeDerécupiration.classList.add('border-1','border-solid','border-gray-300','rounded-xl','w-full','h-11')
  formillaireDeRécupiration.append(villeDerécupiration)

  const adresse =document.createElement("label")
  adresse.for='adresseComplète'
  adresse.textContent=("Adresse complète *")
  formillaireDeRécupiration.append(adresse)
  const adresseComplète =document.createElement("input")
  adresseComplète.type='text'
  adresseComplète.classList.add('border-1','border-solid','border-gray-300','rounded-xl','w-full','h-11')
  formillaireDeRécupiration.append(adresseComplète)

  const heureLivraison =document.createElement("label")
  heureLivraison.for='heureDeLivraison'
  heureLivraison.textContent=("Heure de livraison *")
  formillaireDeRécupiration.append(heureLivraison)
  const heureDeLivraison =document.createElement("input")
  heureDeLivraison.type='text'
  heureDeLivraison.classList.add('border-1','border-solid','border-gray-300','rounded-xl','w-full','h-11')
  formillaireDeRécupiration.append(heureDeLivraison)

  }
}


// function optionsFacultativ(){

//   const option =document.createElement("article")
//   optionsFacultatives.append(option)
//   option.classList.add('border-1', 'border-solid', 'border-gray-300','rounded-xl')

//   const optionRadio =document.createElement("input")
//   option.append(optionRadio)
//   optionRadio.classList.add('w-20')
//   optionRadio.type='radio'

//   const option

// }





