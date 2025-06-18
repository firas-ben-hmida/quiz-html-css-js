# quiz-html-css-js
# 🧠 Web Quiz App

Ce projet est une application de quiz interactive développée avec **HTML**, **CSS**, et **JavaScript**, qui permet de tester ses connaissances dans 3 domaines différents :

- 💻 JavaScript  
- 🐘 PHP  
- 🎾 Tennis  

Chaque quiz contient **10 questions**, avec 4 choix de réponses par question.

---

## 🔗 Démo en ligne

📍 Essaie l'application ici :  
👉 [https://quiz-my-history.netlify.app/](https://quiz-my-history.netlify.app/)

---

## 🚀 Fonctionnalités

- Interface simple et responsive
- 3 thèmes de quiz au choix
- Affichage de score à la fin de chaque quiz
- Sauvegarde automatique de l’historique des résultats (score + date + heure)
- Affichage d’un historique des scores par thème dans une page dédiée
- Option pour **vider l’historique**

---

## 🧩 Technologies utilisées

- **HTML5**
- **CSS3**
- **Vanilla JavaScript (ES6)**
- **Web Storage API (localStorage)**

---

## 📁 Structure du projet

```plaintext
/quiz-project
│
├── quiz.html               # Page d'accueil pour choisir un thème
├── javascriptQuiz.html     # Page du quiz JavaScript
├── phpQuiz.html            # Page du quiz PHP
├── tennisQuiz.html         # Page du quiz Tennis
├── myHistory.html          # Page pour consulter l’historique
│
├── questions.json          # Fichier contenant toutes les questions
├── quiz.js                 # Script principal du quiz (logique + score)
├── myHistory.js            # Script pour gérer l’affichage de l’historique
├── quiz.css                # Feuille de style
│
└── README.md               # Ce fichier
