// Fonction pour mettre à jour une barre de progression spécifique
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
      stripedProgress.textContent = progressText;

      // Mettre à jour le titre de la barre de progression
      progressBar.setAttribute('title', currentProgress + '%');

      // Vérifier si la cible est atteinte
      if (currentProgress >= target) {
          clearInterval(interval); // Arrêter l'intervalle
      }
  }, 50); // temps de répétition
}


function initProgressBarsWhenVisible() {
  // Options pour l'observateur d'intersection
  var options = {
    root: null, // Utiliser la fenêtre de visualisation comme zone d'observation
    rootMargin: '0px', // Pas de marge supplémentaire
    threshold: 0.5 // Déclencher lorsque la moitié de l'élément est visible
  };

  // Créer un nouvel observateur d'intersection
  var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      // Si la barre de progression est visible à l'écran
      if (entry.isIntersecting) {
        // Récupérer les éléments spécifiques à cette barre de progression
        var progressBarId = entry.target.getAttribute('id');
        var stripedProgressId = progressBarId.replace('progress-bar', 'striped-progress');
        // Initialiser la barre de progression correspondante
        updateProgressBar(parseInt(entry.target.getAttribute('data-target')), progressBarId, stripedProgressId);
        // Arrêter de surveiller une fois que la barre de progression est initialisée
        observer.unobserve(entry.target);
      }
    });
  }, options);

  // Observer chaque barre de progression
  document.querySelectorAll('.progress').forEach(function(bar) {
    observer.observe(bar);
  });
}

// Appeler la fonction pour initialiser les barres de progression lorsque visibles à l'écran
initProgressBarsWhenVisible();
