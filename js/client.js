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
  marque:"",
  modele:"",
  categorie:"",
  dateDebut: "",
  dateFin: "",
  prixAJour:"",
  durée:"",
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
listeVéhicules.classList.add('grid','grid-cols-1','gap-4','md:grid-cols-2','lg:grid-cols-3')
// class="grid grid-cols-1   gap-4"

const lieuDeRécupération =document.getElementById("lieuDeRécupération")
// lieuDeRécupération.classList.add('grid','grid-cols-1','gap-3')

const menu =document.getElementById("menu")
const nav =document.getElementById("nav")

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
const durée =document.getElementById("information")
const résuméPrix =document.getElementById("résuméPrix")
const informationDurée=document.getElementById("informationDurée")



menu.addEventListener("click",() =>{
  nav.classList.toggle("hidden")
})

const dateDeAujourdHui = new Date()
  dateDeAujourdHui.setHours(0, 0, 0, 0)
dateDébut.setAttribute('min',dateDeAujourdHui.toDateString("fr-FR"))
dateFin.min=dateDeAujourdHui

 console.log(dateDeAujourdHui);


let etaps =["etapUn","etapDeux","etapTrois","etapQuatre"]

let nombre=0
let etapeActuelle=etaps[nombre]



dateDébut.addEventListener("change", () =>{
selectedConfig.dateDebut=dateDébut.value

d()
})

dateFin.addEventListener("change",() =>{
selectedConfig.dateFin=dateFin.value
d()
})
 
 


  function d() {

  if (
    selectedConfig.dateDebut == "" &&
    selectedConfig.dateFin == "" &&
    selectedConfig.voitureId == null
  ) {
    résuméPrix.replaceChildren()
    return
  }
  const d1 = new Date(selectedConfig.dateDebut + "T00:00:00")
  const d2 = new Date(selectedConfig.dateFin + "T00:00:00")

  if (d2 <= d1) {
    résuméPrix.replaceChildren()
    return
  }
  selectedConfig.durée =((d2 - d1) / 86400000)+1
  

  locationn();
}



function locationn (){
 
  résuméPrix.replaceChildren();
  if (selectedConfig.marque ==""){
    return
  }else{

    

    const marqueEtModele =document.createElement("h2")
    résuméPrix.append(marqueEtModele)
    marqueEtModele.textContent=(`${selectedConfig.marque} ${selectedConfig.modele}`)
    marqueEtModele.classList.add('font-bold','mt-5')
    marqueEtModele.classList.add('text-3xl','font-bold','text-gray-900','mb-5')

    const categoriEtPrix =document.createElement("p")
    categoriEtPrix.textContent=(`${selectedConfig.categorie} ${selectedConfig.prixAJour} MAD / jour`)
    résuméPrix.append(categoriEtPrix)
    categoriEtPrix.classList.add('text-gray-500','text-base','mb-8')
  }


  if(selectedConfig.dateDebut =="" ||
    selectedConfig.dateFin =="" ||
  selectedConfig.marque =="" ){
      
      return

  }else{

    
    informationDurée.textContent=(`Durée : ${selectedConfig.durée} jours. Les dates de début et de fin sont incluses.`)
    const line=document.createElement("hr")
    résuméPrix.append(line)
    line.classList.add('text-gray-200','mb-4')

    const d1 = new Date(selectedConfig.dateDebut + "T00:00:00");
    const jourDebut=d1.getDate()
    const tempsDeLocation = document.createElement("p")
    résuméPrix.append(tempsDeLocation)
    tempsDeLocation.textContent=(`${jourDebut} →  ${selectedConfig.dateFin}`)
    tempsDeLocation.classList.add('mb-5')
  

    const datedéb =document.createElement("p")
    résuméPrix.append(datedéb)
    datedéb.textContent=(`${selectedConfig.durée} jours dates incluses`)
    datedéb.classList.add('font-bold','text-[#192B3F]','mb-5')

    const contuner =document.createElement("div")
    résuméPrix.append(contuner)
    contuner.classList.add('grid','grid-cols-2','mb-5')

    const duréeXPrix =document.createElement("p")
    contuner.append(duréeXPrix)
    duréeXPrix.textContent=(`Véhicule  ${selectedConfig.durée} X ${selectedConfig.prixAJour} MAD`)
    duréeXPrix.classList.add('text-base','text-[#697C94]')
        
    const résultatsDuréeXPrix=document.createElement("p")
    contuner.append(résultatsDuréeXPrix)
    résultatsDuréeXPrix.textContent=(`${selectedConfig.prixAJour * selectedConfig.durée} MAD`)
    résultatsDuréeXPrix.classList.add(
    'text-right',
    'font-bold'
    )

    const récupération =document.createElement("p")
    récupération.textContent=("Récupération")
    contuner.append(récupération)
    récupération.classList.add(
    'text-[#697C94]'
    )

    const récupérationValue =document.createElement("p")
    récupérationValue.textContent=("Gratuite")
    contuner.append(récupérationValue)
    récupérationValue.classList.add('text-xl','font-bold')
    récupérationValue.classList.add(
    'text-right',
    'text-lg',
    'font-bold',
    'text-[#192B3F]'
    )

    const line2=document.createElement("hr")
    résuméPrix.append(line2)
    line2.classList.add('text-gray-200','mb-4')
    

    const totalDiv =document.createElement("div")
    résuméPrix.append(totalDiv)
    totalDiv.classList.add('grid','grid-cols-2','mb-5')
    totalDiv.classList.add(
    'grid',
    'grid-cols-2',
    'items-center',
    'mb-5'
    )

    const total =document.createElement("p")
    totalDiv.append(total)
    total.textContent=("Total estimé")
    total.classList.add(
    'font-bold',
    'text-[#192B3F]'
    )

    const totalValue =document.createElement("p")
    totalValue.textContent=(`${selectedConfig.prixAJour * selectedConfig.durée}`)
    totalDiv.append(totalValue)
    totalValue.classList.add(
    'text-right',
    'text-3xl',
    'font-bold',
    'text-blue-700'
    )

    const info =document.createElement("p")
    info.textContent=("Frais de récupération facturés une seule fois.")
    résuméPrix.append(info)
    info.classList.add('text-[#697c64]')
    info.classList.add(
    'text-gray-400',
    'text-sm',
    'mb-5'
    )
    const infoDiv =document.createElement("div")
    résuméPrix.append(infoDiv)
    infoDiv.classList.add('bg-[#F4F6FA]','py-3','rounded-xl')

    const inform =document.createElement("p")
    infoDiv.append(inform)
    inform.textContent=("Une demande, sans paiement en ligne")
    // infoDiv.append(inform)
    // inform.textContent=("Une demande, sans paiement en ligne.") 
    inform.classList.add('text-[#697C94]','text-sm','px-3')

  }
}



buttonRecommencer.addEventListener("click",(e) =>{
  e.preventDefault()


  selectedConfig.voitureId=""
  selectedConfig.marque=""
  selectedConfig.modele=""
  selectedConfig.categorie=""
  selectedConfig.dateDebut=""
  selectedConfig.dateFin=""
  selectedConfig.durée=""
  selectedConfig.prixAJour=""

  

  dateDébut.value=""
  dateFin.value=""

  listeVéhicules.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.checked = false
  })

  résuméPrix.replaceChildren()
})












buttonSuivant.addEventListener("click", (e)=>{
  e.preventDefault()

  if(nombre < etaps.length-1){
    
    nombre=nombre+1
    etapeActuelle=etaps[nombre]
    styleEtaps()

  }
})




styleEtaps()

// listeVéhicules

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
  
      Array.from(listeVéhicules.children).forEach(carte => {
    carte.classList.remove("border-blue-500");
    carte.classList.add("border-gray-300");
  });


voiture.classList.remove("border-gray-300");
  voiture.classList.add("border-blue-500");
     
    
      selectedConfig.voitureId = voitureRadio.value
      selectedConfig.marque=voitur.marque
      selectedConfig.modele=voitur.modele
      selectedConfig.categorie=voitur.categorie
      selectedConfig.voitureId=voitur.id
      selectedConfig.prixAJour=(voitur.prixJour)
      console.log(selectedConfig)
    console.log(selectedConfig.dateDebut);
    console.log(selectedConfig.dateFin);
    d()

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
  
  });

}


function styleEtaps (){

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





