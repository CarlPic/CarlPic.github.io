// Fonction pour mettre à jour une barre de progression
function updateProgressBar(target, progressBarId, stripedProgressId) {
  var progressBar = document.getElementById(progressBarId);
  var stripedProgress = document.getElementById(stripedProgressId);
  var currentProgress = 0;
  var interval = setInterval(function() {
      // Augmenter la progression de 5%
      currentProgress += 5;

      // Mettre à jour la largeur de la partie "striped" de la barre de progression
      var stripedWidth = currentProgress + '%';
      stripedProgress.style.width = stripedWidth;

      // Mettre à jour le texte de progression actuelle
      var progressText = currentProgress + '%';
      document.getElementById(stripedProgressId).textContent = progressText;

      // Mettre à jour le titre de la barre de progression
      progressBar.setAttribute('title', currentProgress + '%');

      // Vérifier si la cible est atteinte
      if (currentProgress >= target) {
          clearInterval(interval); // Arrêter l'intervalle
      }
  }, 50); // temps de répétition
}


function initProgressBars() {
  // Appeler la fonction pour chaque barre de progression avec la cible de progression correspondante
  updateProgressBar(95, 'progress-bar-1', 'striped-progress-1'); 
  updateProgressBar(90, 'progress-bar-2', 'striped-progress-2'); 
  updateProgressBar(85, 'progress-bar-3', 'striped-progress-3'); 
  updateProgressBar(70, 'progress-bar-4', 'striped-progress-4'); 
}

