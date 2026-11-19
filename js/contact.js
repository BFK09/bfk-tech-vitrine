// Leçon 04 — formulaire de contact → message WhatsApp

// 1. TROUVER : on récupère le formulaire dans la page (même sélecteur qu'en CSS)
const form = document.querySelector(".contact-form");

// 2. ÉCOUTER : quand le formulaire est envoyé (clic sur le bouton ou touche Entrée)…
form.addEventListener("submit", function (event) {
    // 3. RÉAGIR : on annule le comportement par défaut (envoi + rechargement de la page)
    event.preventDefault();

    // Étape 3 : lire ce que la personne a saisi (# = sélecteur d'id, comme en CSS)
    const nom = document.querySelector("#nom").value;
    const ville = document.querySelector("#ville").value;
    const activite = document.querySelector("#activite").value;
    const besoin = document.querySelector("#besoin").value;
    const precisions = document.querySelector("#message").value;

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
