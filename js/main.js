(function() {
  "use strict";

  /**
   * Fonction pour calculer le score du quiz
   */
  function calculScore() {
    var form = document.getElementById('quizForm');
    var rep = form.querySelectorAll('input[type="radio"]:checked');
    var score = 0;

    rep.forEach(function(rep) {
      if (rep.value === "correct") {
        score++;
      }
    });

    var result = document.getElementById('result');
    result.textContent = "Votre score est : " + score + " / " + rep.length;
  }

  // Attacher la fonction avec le clic du bouton
  var quizButton = document.querySelector('button');
  if (quizButton) {
    quizButton.addEventListener('click', calculScore);

  }
 

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    /*initialisation AOS*/ 
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',/*l'animation démarre lentement, s'accélère, puis ralentit à la fin */
      once: true,/* l'animation ne se déclenche qu'une seule fois */
      mirror: false/*aucune animation ne se produit lors du défilement vers le haut */
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * typed pour faire lanimation du phrase en acceuil
   */
  
  var typed = new Typed('.typed', {
    strings: ["Développeuse", "compétente en PNL"],/*Définit les mots à afficher successivement Typed.js ecrire  ces mot une par une*/
    typeSpeed: 100,/*chaque caractere secrit chaque 100ms*/ 
    backSpeed: 30,/*chaque caractere va supprimer en arriere en 30ms  */
    loop: true/*on recomence lanimation une fois que toute la chaine afficher et suprimer */ 
    });
  

})();