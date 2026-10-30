
let tab = [ 
   {
    "id": 1,
    "marque": "Dacia",
    "modele": "Sandero",
    "immatriculation": "AUTO-001",
    "categorie": "Citadine",
    "prixJour": 250,
    "statut": "Disponible"
  },
  {
    "id": 2,
    "marque": "Renault",
    "modele": "Mégane",
    "immatriculation": "AUTO-002",
    "categorie": "Berline",
    "prixJour": 380,
    "statut": "Louée"
  },
  {
    "id": 3,
    "marque": "Hyundai",
    "modele": "Tucson",
    "immatriculation": "AUTO-003",
    "categorie": "SUV",
    "prixJour": 550,
    "statut": "En maintenance"
  },
  {
    "id": 4,
    "marque": "Peugeot",
    "modele": "208",
    "immatriculation": "AUTO-004",
    "categorie": "Citadine",
    "prixJour": 280,
    "statut": "Disponible"
  },
  {
    "id": 5,
    "marque": "Toyota",
    "modele": "Corolla",
    "immatriculation": "AUTO-005",
    "categorie": "Berline",
    "prixJour": 420,
    "statut": "Louée"
  },
  {
    "id": 6,
    "marque": "Dacia",
    "modele": "Duster",
    "immatriculation": "AUTO-006",
    "categorie": "SUV",
    "prixJour": 450,
    "statut": "Disponible"
  }
  
]
let arrayBackup=[...tab];


localStorage.setItem("voiture",JSON.stringify(tab))


const vmarque = document.getElementById("marque")
const vmodele = document.getElementById("modele")
const vimmatriculation = document.getElementById("immatriculation")
const vcategorie = document.getElementById("categorie")
const vprixJour = document.getElementById("prix-jour")
const vstatut = document.getElementById("statut")
const tableauVoitures = document.getElementById("liste-voitures")
const buttonAjouter = document.getElementById("bouton-enregistrer")
const recherche =document.getElementById("recherche")
const filtreStatut =document.getElementById("filtre-statut")
const filtreCategorie =document.getElementById("filtre-categorie")
const triPrix =document.getElementById("tri-prix")
const buttonReinitialiser =document.getElementById("reinitialiser-filtres")
const buttonAnneler =document.getElementById("annuler-modification")

const erreurMarque =document.getElementById("erreur-marque")
const erreurModele =document.getElementById("erreur-modele")
const erreurImmatriculation =document.getElementById("erreur-immatriculation")
const erreurCategorie =document.getElementById("erreur-categorie")

let numbre=7
let indexVoitureModifire=""
let rechercheInput=""
let filtreStatutInput=""
let filtreCategorieOption=""
let triPrixOptin=""
let allChampValid=true


const voitureMarque =vmarque.value;
const voitureModele =vmodele.value
const voitureImmatriculation =vimmatriculation.value
const voitureCategorie =vcategorie.value
const voiturePrixJour =vprixJour.value
const voitureStatus =vstatut.value

if(voitureMarque==="" || voitureModele==="" ||
 voitureImmatriculation===""|| (!/^AUTO-[0-9]{3}$/.test(voitureImmatriculation))|| 
voitureCategorie==="" || voiturePrixJour==="" || voitureStatus===""){
  allChampValid=false
  console.log(allChampValid)
}

const voitureInformation = {
  "id":numbre,
  marque:voitureMarque,
  modele:voitureModele,
  immatriculation: voitureImmatriculation,
  categorie: voitureCategorie,
  prixJour: voiturePrixJour,
  statut: voitureStatus,
}

afficherVoiture()

buttonReinitialiser.addEventListener("click", (e) =>{
  e.preventDefault()
  recherche.value=""
  filtreStatut.value=""
  filtreCategorie.value=""
  triPrix.value=""
  arrayBackup=[...tab];
  afficherVoiture()
  console.log(arrayBackup)
   console.log(tab)

})

buttonAnneler.addEventListener("click",(e) =>{
  vmarque.value=""
  vmodele.value=""
  vimmatriculation.value=""
  vcategorie.value=""
  vprixJour.value=""
  vstatut.value=""
  
})

buttonAjouter.addEventListener("click", (e) => {
  e.preventDefault()
  arrayBackup=[...tab];
  localStorage.setItem("voiture",JSON.stringify(tab))
  if(indexVoitureModifire !==""){
    enrejistrerModifiction()
    
    
    
  }else{
    if(allChampValid=true){
      ajouterVoiture()
    }else{
      return
    }
    
    

  }
})
filtreStatut.addEventListener("change" ,(e) =>{
  filtreStatutInput= e.target.value.toLowerCase().trim();
  console.log(filtreStatutInput)
  
  filtrage()
  afficherVoiture()
})

filtreCategorie.addEventListener("change" ,(a) =>{
  filtreCategorieOption=a.target.value.toLowerCase().trim();
  
  filtrage()
  afficherVoiture()
})

recherche.addEventListener("input" ,(event) => {
rechercheInput=event.target.value.toLowerCase().trim();

  filtrage()
  afficherVoiture()
})

triPrix.addEventListener("change" ,(e) => {
  triPrixOptin =e.target.value.toLowerCase().trim();
  if(triPrixOptin==="décroissant"){
    tab.sort((a,b)=>a.prixJour - b.prixJour)
    afficherVoiture()
  }else if(triPrixOptin=== "croissant"){
    tab.sort((a,b) => b.prixJour - a.prixJour)
    afficherVoiture();
  }else{
    tab.sort((a,b) => a.id- b.id)
    afficherVoiture();
    console.log("fff");
    
  }
})

function filtrage(){
  tab =arrayBackup.filter(v =>
  (v.marque.toLowerCase().trim().includes(rechercheInput)|| 
  v.modele.toLowerCase().trim().includes(rechercheInput)|| 
  v.immatriculation.toLowerCase().trim().includes(rechercheInput))
  &&( filtreStatut.value ==="" || v.statut.toLowerCase().trim() === filtreStatutInput)
  && (filtreCategorie.value ==="" || v.categorie.toLowerCase().trim() ===filtreCategorieOption)
  )
 
}



function afficherVoiture() {

   tableauVoitures.innerHTML = ""
  
    tab.forEach((v) => {
      créationVoiture(v)
    })
}     
  
function créationVoiture(v){
  const voiture = document.createElement("tr")
  tableauVoitures.append(voiture)

  const vMarque = document.createElement("td")
  voiture.append(vMarque)
  vMarque.textContent = (v.marque)

  const vModele = document.createElement("td")
  voiture.append(vModele)
  vModele.textContent = (v.modele)

  const vImmatriculation = document.createElement("td")
  voiture.append(vImmatriculation)
  vImmatriculation.textContent = (v.immatriculation)
  vImmatriculation.classList.add("registration")

  const vCategorie = document.createElement("td")
  voiture.append(vCategorie)
  vCategorie.textContent = (v.categorie)

  const vPrixJour = document.createElement("td")
  voiture.append(vPrixJour)
  vPrixJour.textContent = (v.prixJour)
  vPrixJour.classList.add("price")

  const vStatut = document.createElement("td")
  voiture.append(vStatut)
  vStatut.textContent = (v.statut)
  statutClass(vStatut)

  const actions =document.createElement("td")
  voiture.append(actions)

  const action =document.createElement("div")
  actions.append(action)

  const buttomModifier =document.createElement("button")
  action.append(buttomModifier)
  buttomModifier.textContent=("Modifier")
  buttomModifier.classList.add("button","button-edit")

  buttomModifier.addEventListener("click", (e) =>{
    e.preventDefault()
    modification(v)

    function modification(v){
      v =tab.find(i=>i.id===v.id)
      console.log("index :"+v)
      vmarque.value=v.marque
      vmodele.value=v.modele
      vimmatriculation.value=v.immatriculation
      vcategorie.value=v.categorie
      vprixJour.value=v.prixJour
      vstatut.value=v.statut
      indexVoitureModifire=v
      
      console.log("s"+indexVoitureModifire)
      buttonAjouter.textContent=("enregistrer la modification")
    }
    buttonAnneler.hidden=false
    buttonSupprimer.hidden=true
  })
  

  const buttonSupprimer =document.createElement("button")
  action.append(buttonSupprimer)
  buttonSupprimer.textContent=("Supprimer")
  buttonSupprimer.classList.add("button","button-delete")

  buttonSupprimer.addEventListener("click", (e) => {
    e.preventDefault()
    supprission(v)
    
    function supprission(a){
      
      const index =tab.findIndex(i=>i.immatriculation===a.immatriculation)

      tab.splice(index,1)
      arrayBackup=[...tab];
      localStorage.setItem("voiture",JSON.stringify(tab))
      afficherVoiture()
    }


  })

  function statutClass(l){
    if(l.textContent ==="Disponible"){
      l.classList.add("badge-disponible","badge");
    }else if(l.textContent==="Louée"){
      l.classList.add("badge-louee","badge");
    }else{
      l.classList.add("badge-maintenance","badge");
    }
  }

  
}



function enrejistrerModifiction(){
  tab.forEach(v =>{
  if (v==indexVoitureModifire){
    mod(v)
    buttonAjouter.textContent=("Ajouter la voiture")
  }
  })
  
  
  

  function mod(v){
  
    v.marque = vmarque.value
    v.immatriculation = vimmatriculation.value
    v.categorie = vcategorie.value
    v.modele = vmodele.value
    v.prixJour = vprixJour.value
    v.statut = vstatut.value
  }
  buttonAnneler.hidden=true
  indexVoitureModifire=""
  viderForm()
  
  afficherVoiture()
}
function ajouterVoiture(){
  numbre++
  
    const voitureMarque =vmarque.value
    const voitureModele =vmodele.value
    const voitureImmatriculation =vimmatriculation.value
    const voitureCategorie =vcategorie.value
    const voiturePrixJour =vprixJour.value
    const voitureStatus =vstatut.value
   
    const voitureInformation = {
      "id":numbre,
      marque:voitureMarque,
      modele:voitureModele,
      immatriculation: voitureImmatriculation,
      categorie: voitureCategorie,
      prixJour: voiturePrixJour,
      statut: voitureStatus,
    }
      

    tab.push(voitureInformation)
    viderForm()
    arrayBackup=[...tab]
    localStorage.setItem("voiture",JSON.stringify(tab))
    afficherVoiture()
}


function viderForm(){
  vmarque.value=""
  vmodele.value=""
  vimmatriculation.value=""
  vcategorie.value=""
  vprixJour.value=""
  vstatut.value=""
}

