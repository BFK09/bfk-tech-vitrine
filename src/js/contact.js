// Leçon 04 — formulaire de contact → message WhatsApp

// 1. TROUVER : on récupère le formulaire dans la page (même sélecteur qu'en CSS)
const form = document.querySelector(".contact-form");

// 2. ÉCOUTER : quand le formulaire est envoyé (clic sur le bouton ou touche Entrée)…
form.addEventListener("submit", function (event) {
    // 3. RÉAGIR : on annule le comportement par défaut (envoi + rechargement de la page)
    event.preventDefault();

    // Leçon 05 : .trim() retire les espaces (et retours à la ligne) au début et à la fin
    // "  Koffi  " devient "Koffi" ; "   " devient "" (chaîne vide)
    // On remet le texte nettoyé DANS le champ : un nom fait d'espaces redevient un champ vide…
    const champNom = document.querySelector("#nom");
    const champVille = document.querySelector("#ville");
    champNom.value = champNom.value.trim();
    champVille.value = champVille.value.trim();

    // … et on redemande au navigateur de vérifier les « required ».
    // reportValidity() renvoie true si tout est bon, false sinon (et affiche la bulle d'erreur).
    // ! = « non » ; return = on quitte la fonction ici, WhatsApp ne s'ouvre pas
    if (!form.reportValidity()) {
        return;
    }

    // Étape 3 : lire ce que la personne a saisi (# = sélecteur d'id, comme en CSS)
    const nom = champNom.value;
    const ville = champVille.value;
    const activite = document.querySelector("#activite").value;
    const besoin = document.querySelector("#besoin").value;
    const precisions = document.querySelector("#message").value.trim();

    // Composer le message : entre accents graves ` `, ${…} insère la valeur d'une variable
    // \n = retour à la ligne. « let » car le message pourra être complété plus bas
    let message = `Bonjour BFK-TECH, je suis ${nom}, à ${ville}.\nActivité : ${activite}.\nBesoin : ${besoin}.`;

    // Les précisions sont facultatives : on ne les ajoute que si le champ n'est pas vide
    if (precisions !== "") {
        message = message + `\nPrécisions : ${precisions}`;
    }

    // Étape 4 : une adresse ne peut contenir ni espaces, ni accents, ni retours à la ligne.
    // encodeURIComponent les remplace par des codes (%20, %C3%A9, %0A…)
    const url = `https://wa.me/2250758269975?text=${encodeURIComponent(message)}`;

    // Ouvrir WhatsApp dans un nouvel onglet (sur téléphone : l'application WhatsApp)
    // "noopener" : la page ouverte ne peut pas agir sur notre onglet (window.opener reste vide)
    window.open(url, "_blank", "noopener");
});
