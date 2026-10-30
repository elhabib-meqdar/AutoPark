



let voiture_obj = JSON.parse(localStorage.getItem("voiture"));

// import {nombreVoitureTotal, nombreVoitureDisponible, nombreVoitureLouée, nombreVoitureEnMaintenance} from"./voitures.js"

const VoitureTotal = document.getElementById("VoitureTotal")
const VoitureDisponible = document.getElementById("VoitureDisponible")
const VoitureLouée = document.getElementById("VoitureLouée")
const VoitureEnMaintenance = document.getElementById("VoitureEnMaintenance")


let nombreVoitureTotal=(voiture_obj.length)
let nombreVoitureDisponible=0
let nombreVoitureLouée=0
let nombreVoitureEnMaintenance=0
let total=0




voiture_obj.forEach(v =>{
if(v.statut=="Disponible"){
  nombreVoitureDisponible++
}else if(v.statut=="Louée"){
  nombreVoitureLouée++
  total=total+(v.prixJour)
}else{
  nombreVoitureEnMaintenance++
}

})

VoitureTotal.textContent=nombreVoitureDisponible
VoitureDisponible.textContent=nombreVoitureDisponible
VoitureLouée.textContent=nombreVoitureLouée
VoitureEnMaintenance.textContent=nombreVoitureEnMaintenance

const prix = document.getElementById("prix")
prix.textContent=(total)
// const carteTotal = document.createElement("div")

// const totalPrixJour = document.createElement("p")
console.log(total)


let pd=(nombreVoitureDisponible /nombreVoitureDisponible)
console.log(pd)