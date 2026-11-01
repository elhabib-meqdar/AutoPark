AutoPark --- Gestion du parc automobile



1. Présentation

AutoPark est une application web de gestion du parc automobile de l'agence fictive Atlas Auto. Elle permet de consulter les véhicules, d'ajouter de nouvelles voitures, de modifier leurs informations, de les supprimer et de suivre leur disponibilité.
L'application comporte deux pages : - voitures.html : gestion du parc automobile. - index.html : tableau de bord avec les principaux indicateurs du parc.
Le projet fonctionne entièrement côté navigateur, sans backend ni base de données. Les données sont enregistrées localement avec localStorage.


2. Technologies utilisées

HTML5
CSS3
JavaScript Vanilla (ES6+)
DOM et événements JavaScript
Modules ES6 (import / export)
localStorage et JSON
Git et GitHub
Jira pour l'organisation des tâches


3. Fonctionnalités

Gestion des véhicules
Affichage dynamique des voitures dans un tableau.
Ajout d'un véhicule avec validation des champs.
Modification d'un véhicule existant.
Suppression avec demande de confirmation.
Identifiant unique généré automatiquement.
Vérification de l'unicité de l'immatriculation, sans tenir compte de la casse ni des espaces autour.
Gestion des statuts : Disponible, Louée et En maintenance.
Gestion du parc vide et des recherches sans résultat.
Recherche, filtres et tri
Recherche par marque, modèle ou immatriculation.
Filtrage par catégorie : Citadine, Berline ou SUV.
Filtrage par statut.
Tri par prix journalier croissant ou décroissant.
Possibilité de combiner les critères et de les réinitialiser.
Tableau de bord
Le dashboard présente quatre indicateurs calculés à partir des données enregistrées : - Nombre total de véhicules. - Nombre de véhicules disponibles. - Nombre de véhicules loués. - Nombre de véhicules en maintenance.
Les indicateurs sont actualisés à chaque ouverture ou rechargement de la page.
Sauvegarde locale
Les données sont sauvegardées dans le localStorage du navigateur après chaque ajout, modification ou suppression. Elles sont récupérées au chargement de l'application. Les données initiales ne sont utilisées que lorsqu'aucune sauvegarde n'existe.
Les données sont stockées dans le navigateur utilisé. Elles ne sont pas synchronisées entre plusieurs appareils ou navigateurs. Effacer les données du site dans le navigateur peut supprimer le parc enregistré.


4. Structure du projet

Adaptez cette arborescence aux noms exacts des fichiers présents dans votre projet.
AutoPark/
├── index.html
├── voitures.html
├── css/
│ ├── style.css
│ └── dashboard.css
├── js/
│ ├── data.js
│ ├── storage.js
│ ├── voitures.js
│ ├── dashboard.js
│ └── utils.js
└── README.md
Rôle indicatif des modules JavaScript :
Fichier Responsabilité
data.js Définition des données initiales et des fonctions liées aux véhicules
storage.js Lecture et écriture des données dans localStorage
utils.js Fonctions communes réutilisables
voitures.js Affichage du tableau, formulaire, CRUD, recherche, filtres et tri
dashboard.js Calcul et affichage des indicateurs du dashboard


5. Installation et lancement

Prérequis
Un navigateur web récent.
Visual Studio Code (recommandé).
L'extension Live Server ou un autre serveur HTTP local.
Étapes
Cloner le dépôt GitHub :
git clone URL_DU_DEPOT
Ouvrir le dossier du projet dans Visual Studio Code.
Démarrer un serveur local :
Avec Live Server : ouvrir index.html, puis choisir Open with Live Server.
Ou avec Python, depuis le dossier du projet :
python -m http.server 5500
Ouvrir dans le navigateur :
http://localhost:5500/
Pour accéder directement aux pages :
http://localhost:5500/index.html
http://localhost:5500/voitures.html
Important : les modules JavaScript ES6 doivent être exécutés via un serveur local HTTP, et non en ouvrant directement les fichiers HTML avec file://.


6. Utilisation

Ouvrir le dashboard pour consulter les statistiques du parc.
Cliquer sur la navigation vers la gestion des voitures.
Remplir le formulaire pour ajouter un véhicule.
Utiliser Modifier pour charger les informations d'un véhicule dans le formulaire.
Enregistrer les changements ou annuler la modification.
Utiliser Supprimer et confirmer l'opération pour retirer un véhicule.
Saisir un mot-clé, choisir une catégorie ou un statut, puis sélectionner le tri souhaité.
Recharger la page pour vérifier que les données sont toujours présentes.


7. Règles de validation

Tous les champs obligatoires doivent être renseignés.
Les champs contenant uniquement des espaces sont considérés comme vides.
Le prix journalier doit être un nombre strictement positif.
L'immatriculation doit être unique, sans distinction entre majuscules et minuscules et après suppression des espaces autour.
Lors d'une modification, le véhicule peut conserver sa propre immatriculation.
Une modification ne doit pas créer un nouvel identifiant ni un deuxième véhicule.


8. Tests à effectuer

[ ]
Afficher les véhicules initiaux.
[ ]
Ajouter un véhicule valide.
[ ]
Refuser les champs vides ou composés uniquement d'espaces.
[ ]
Refuser un prix nul, négatif ou invalide.
[ ]
Refuser une immatriculation déjà utilisée, même avec une casse différente.
[ ]
Modifier un véhicule sans changer son identifiant.
[ ]
Annuler le mode modification.
[ ]
Supprimer un véhicule et tester l'annulation de la confirmation.
[ ]
Rechercher par marque, modèle et immatriculation.
[ ]
Combiner recherche, filtres et tri.
[ ]
Vérifier le message lorsque le parc est vide ou qu'aucun résultat ne correspond.
[ ]
Recharger la page et vérifier la persistance des données.
[ ]
Vérifier les quatre compteurs du dashboard, y compris avec un parc vide.
[ ]
Tester l'affichage sur mobile, tablette et ordinateur.
[ ]
Vérifier la console du navigateur : aucune erreur JavaScript bloquante.


9. Organisation du travail

Le projet peut être suivi dans Jira avec les étapes suivantes :
Analyse du starter et préparation du zoning.
Initialisation du dépôt GitHub et des modules.
Affichage dynamique et ajout des véhicules.
Modification, suppression et sauvegarde locale.
Recherche, filtres et tri.
Création du dashboard responsive.
Tests, documentation et déploiement.



10. Gestion du projet avec Jira


Jira est utilisé pour organiser, planifier et suivre les différentes tâches du projet AutoPark. Il permet de diviser le projet en plusieurs étapes, de suivre leur avancement et de respecter les délais de réalisation

11. Git et GitHub

Exemples de commandes pour versionner le projet :
git init
git add .
git commit -m "Initialisation du projet AutoPark"
git branch -M main
git remote add origin URL_DU_DEPOT
git push -u origin main
Pour enregistrer les changements suivants :
git add .
git commit -m "Description des modifications"
git push
Remplacez URL_DU_DEPOT par l'adresse réelle de votre dépôt GitHub.


12. Déploiement

L'application peut être déployée sur un hébergement statique compatible avec HTML, CSS et JavaScript, par exemple GitHub Pages.
Après le déploiement, vérifier que : - index.html est accessible ; - voitures.html est accessible depuis la navigation ; - les chemins des fichiers CSS et JavaScript sont corrects ; - les modules JavaScript se chargent sans erreur.
Lien du dépôt GitHub : à compléter
Lien de l'application déployée : à compléter
Tableau Jira : à compléter


Projet : AutoPark
Agence fictive : Atlas Auto
Réalisation : Travail individuel
Technologies : HTML5, CSS3, JavaScript ES6+