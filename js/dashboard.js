



let voiture_obj = JSON.parse(localStorage.getItem("voiture"));

// import {nombreVoitureTotal, nombreVoitureDisponible, nombreVoitureLouée, nombreVoitureEnMaintenance} from"./voitures.js"

const VoitureTotal = document.getElementById("VoitureTotal")
const VoitureDisponible = document.getElementById("VoitureDisponible")
const VoitureLouée = document.getElementById("VoitureLouée")
const VoitureEnMaintenance = document.getElementById("VoitureEnMaintenance")
const pDisponibles =document.getElementById("pDisponibles")
const pLouées =document.getElementById("pLouées")
const pMaintenance =document.getElementById("pMaintenance")
const tableauVoitures =document.getElementById("liste-voitures")
const barDisponibles =document.getElementById("barDisponibles")
const barLouées= document.getElementById("barLouées")
const barMaintenance =document.getElementById("barMaintenance")

let nombreVoitureTotal=(voiture_obj.length)
let nombreVoitureDisponible=0
let nombreVoitureLouée=0
let nombreVoitureEnMaintenance=0
let total=Number(0)




voiture_obj.forEach(v =>{
if(v.statut=="Disponible"){
  nombreVoitureDisponible++
}else if(v.statut=="Louée"){
  nombreVoitureLouée++
  total=(total+(Number(v.prixJour)))
}else{
  nombreVoitureEnMaintenance++
}

})

VoitureTotal.textContent=nombreVoitureTotal
VoitureDisponible.textContent=nombreVoitureDisponible
VoitureLouée.textContent=nombreVoitureLouée
VoitureEnMaintenance.textContent=nombreVoitureEnMaintenance

const prix = document.getElementById("prix")
prix.textContent=(total)
// const carteTotal = document.createElement("div")

// const totalPrixJour = document.createElement("p")
console.log(total)


let pd=(nombreVoitureDisponible /nombreVoitureTotal)*100
let pl=(nombreVoitureLouée /nombreVoitureTotal)*100
let pm=(nombreVoitureEnMaintenance /nombreVoitureTotal)*100
console.log(pd)
console.log(pl)
console.log(pm)

pDisponibles.textContent=(`${pd.toFixed(1)} %`)
pLouées.textContent=(`${pl.toFixed(1)} %`)
pMaintenance.textContent=(`${pm.toFixed(1)} %`)

barDisponibles.classList.add(`w-[${pd}%]`)
barLouées.classList.add(`w-[${pl}%]`)
barMaintenance.classList.add(`w-[${pm}%]`)


voiture_obj.forEach((v) => {
  créationVoiture(v)
})

  
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
  // statutClass(vStatut)
}
console.log(voiture_obj)