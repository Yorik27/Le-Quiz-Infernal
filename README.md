# Le Quiz Infernal

## Partie 1

- HTML/CSS Structure
- Base de JS pour l'interaction des écrans



## Pense-bête

- Fontes
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Almendra:wght@700&family=Cormorant+Garamond:ital@1&display=swap" rel="stylesheet">

  font-family: 'Cormorant Garamond', serif;
  font-family: 'Almendra', serif;

Ecrans [au départ] {Lors du jeu} (A la fin)
Ecran de démarrage [display: flex;] {none} (none)
Ecran du jeu [none] {flex} (none)
Ecran de fin [none] {none} (flex)

Dans le JS, à chaque écran, on change le display: none; pour display: flex; Sauf pour l'écran de jeu où on passe d'une question à une autre question.


JS
Créer un windowEventListener au démarrage qui informe du chargement de la page
<!-- const init = () =>{
console.log('Init')
};
window.addEventListener('load', init); -->

Créer les variables de structures (els) sous forme d'objet dont les éléments sont null, vu qu'ils ne sont pas encore initialisés (init).
Une fois crées, les attacher par un document.querySelector.


