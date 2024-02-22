function changerCouleur() {
    // Fonction pour changer la couleur du paragraphe
    let couleur = document.getElementById("couleurInput").value;
    document.getElementById("paragraphe").style.color = couleur;
}

function changerTaille() {
    // Fonction pour changer la taille de la police du paragraphe
    let taille = document.getElementById("tailleInput").value;
    document.getElementById("paragraphe").style.fontSize = taille + "px";
}

function changerPolice() {
    // Fonction pour changer la police du paragraphe
    let police = document.getElementById("policeListe").value;
    document.getElementById("paragraphe").style.fontFamily = police;
}