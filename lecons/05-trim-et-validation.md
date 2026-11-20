# Leçon 05 — Nettoyer la saisie : `.trim()` et `reportValidity()`

## Le problème
`required` vérifie seulement qu'un champ n'est **pas vide**. Trois espaces, ce n'est pas vide :
un nom fait seulement d'espaces passait, et WhatsApp recevait « je suis , à Abidjan. ».

## L'idée à retenir
`.trim()` est le `SUPPRESPACE()` d'Excel : il retire les espaces au **début** et à la **fin**, pas au milieu.

| Saisi | Après `.trim()` |
|---|---|
| `"  Koffi  "` | `"Koffi"` |
| `"Bah Franck "` | `"Bah Franck"` |
| `"   "` | `""` (chaîne vide) |

Mais `.trim()` **nettoie**, il ne **bloque** rien. Pour bloquer, on remet le texte nettoyé dans le champ,
puis on redemande au navigateur de vérifier les `required` :

```js
champNom.value = champNom.value.trim();
if (!form.reportValidity()) {
    return;
}
```

## Notions
- **Chaînage** : `.value.trim()`, chaque méthode s'applique au résultat de la précédente
- `reportValidity()` : `true` si le formulaire est bon, sinon `false` et la bulle d'erreur du navigateur
- `!` = « non » (comme `NON()` dans Excel)
- `return` : quitte la fonction tout de suite, les lignes suivantes ne s'exécutent pas
- Pas de `.trim()` sur les listes déroulantes : le visiteur n'y tape rien

## Vérifié
- 3 espaces dans le nom : WhatsApp ne s'ouvre pas, le champ redevient vide, le curseur s'y place
- `"  Koffi  "` : le message contient « je suis Koffi, à Abidjan. »

## Question de compréhension
Que se passerait-il si on écrivait `.trim()` sur la variable, mais sans remettre le texte nettoyé dans le champ ?
