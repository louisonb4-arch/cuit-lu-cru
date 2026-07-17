# LEGAL-TODO — Cuit Lu Cru, restaurant fait maison

> **Ne pas mettre en ligne avant d'avoir traité la section 1.**
> État au 17 juillet 2026. Aucune donnée n'a été inventée : tout ce qui n'a pas pu être
> vérifié à une source est marqué `[à fournir]` et apparaît **en surbrillance rose sur le
> site lui-même**, exprès — pour qu'un trou se voie au lieu de se combler avec une
> supposition.

---

## 1. Bloquant avant la mise en ligne

### 1.1 Identité de l'éditeur (`mentions-legales.html`)

| Donnée | État |
|---|---|
| Capital social | **manquant** — obligatoire pour une SARL, ne figure dans aucun registre public |
| RCS | **à confirmer** — « RCS Nantes 989 289 921 » est la forme attendue, non vérifiée à une source |
| Directeur de la publication | **manquant** — la société a **deux gérants** (Benjamin Ceuignet, Anaïs Coulon) : lequel des deux assume la fonction ? |
| E-mail | **manquant** — apparaît dans les mentions légales, la confidentialité et le bloc accessibilité |

Le téléphone (**09 61 34 39 29**) est repris du site existant : il est déjà renseigné partout.

### 1.2 L'éditeur s'appelle ABCC, pas Cuit Lu Cru

C'est le point le plus contre-intuitif du dossier, et il est **déjà traité sur la page** :

- **ABCC** est la société (SARL) qui édite le site. C'est elle qui apparaît comme éditeur.
- **Cuit Lu Cru** est l'**enseigne** — le nom sous lequel elle reçoit.
- Le **siège social** est au **158 boulevard des Poilus, 44000 Nantes**. **Ce n'est pas le
  restaurant** : on n'y sert pas à déjeuner.
- Le **restaurant** est au **6 place Alfred Lallié, 44000 Nantes** — c'est l'établissement
  SIRET **989 289 921 00029**, celui qui porte l'enseigne.

Les mentions légales affichent **les deux adresses**, dans un encadré dédié, parce que les
deux sont exactes et qu'omettre le siège serait une erreur. **Ne pas « corriger » le siège en
le remplaçant par l'adresse du restaurant.**

> À confirmer avec le client : le siège est-il toujours au 158 bd des Poilus (adresse
> personnelle d'un gérant ?), ou un transfert au 6 place Alfred Lallié est-il prévu ? Si le
> siège est transféré, la page doit être mise à jour.

### 1.3 « Depuis 2017 » et une société immatriculée en 2025

Le site affiche **« Depuis 2017 »** (bandeau d'édition, tampon « fait maison depuis 2017 »,
frise de la section Histoire). La société éditrice **ABCC** a été immatriculée le
**7 juillet 2025**.

Ce n'est pas une contradiction, et la page l'explique : le registre indique qu'une société
antérieure, **ABC** (SIREN **825 052 822**), portait la même enseigne au **5 rue
Chateaubriand** — établissement aujourd'hui **fermé**, ce qui colle à l'histoire racontée sur
le site (sept ans rue Chateaubriand, puis réouverture à Saint-Donatien).

**À confirmer avec le client / le comptable** : l'articulation juridique exacte entre ABC et
ABCC (reprise de fonds de commerce, cession, sociétés simplement distinctes). La page porte
un `[à confirmer]` sur ce point tant qu'il n'est pas tranché. **Ne pas affirmer une
continuité juridique qui n'est pas documentée.**

### 1.4 Hébergeur (article 6 III-1 LCEN — obligatoire)

Nom, adresse, téléphone et site de l'hébergeur. **Aucun hébergeur définitif n'est arrêté**,
donc les quatre champs sont vides dans `mentions-legales.html`, et la durée de conservation
des journaux de connexion est vide dans `confidentialite.html`.

Une fois l'hébergeur retenu, vérifier s'il implique un **transfert hors UE** (section
correspondante de `confidentialite.html`).

### 1.5 Le bouton « Réserver en ligne » ne mène nulle part

Section « Infos & réservation » de `index.html` :

- le texte affirme « La réservation en ligne est simple, sans frais, et confirmée par
  courriel » ;
- le bouton **« Réserver en ligne »** pointe vers `https://www.nantes.restaurant` —
  **c'est-à-dire la page d'accueil du site lui-même**, ouverte dans un nouvel onglet.

**Il n'existe aucun outil de réservation en ligne sur ce site.** Deux issues, à trancher avec
le client :

1. l'outil existe (Zenchef, TheFork, Tiptoque, autre) → fournir son adresse, et corriger le
   lien ;
2. l'outil n'existe pas → retirer le bouton **et** la phrase qui l'annonce, la réservation se
   faisant par téléphone.

Un `[à confirmer]` est posé sur ce point dans `mentions-legales.html`. Le contenu éditorial
de la page d'accueil n'a **pas** été modifié : c'est une décision client.

### 1.6 Photographies — aucun crédit

Le site publie une vingtaine de photographies (salle, plats, chantier, façade) et **ne porte
aucun crédit photographique**, nulle part. À fournir :

- le **nom de l'auteur** des images ;
- **l'étendue de la cession de droits** (support, durée, territoire) ;
- l'autorisation au titre du **droit à l'image** des personnes reconnaissables — la planche
  contact du chantier montre l'équipe de copains, et la section Histoire les cite nommément.

### 1.7 Vérifier avant publication

```bash
grep -rn "à fournir\|à confirmer" *.html    # ne doit plus rien renvoyer
```

---

## 2. Ce qui a été vérifié (et n'est donc pas à redemander)

Relevé le **17 juillet 2026** au registre national des entreprises via l'API publique
`recherche-entreprises.api.gouv.fr` :

- Dénomination : **ABCC**
- Enseigne de l'établissement : **CUIT LU CRU**
- Forme : **SARL** (code INSEE 5499 — société à responsabilité limitée)
- Siège : **158 boulevard des Poilus, 44000 Nantes**
- Établissement à l'enseigne : **6 place Alfred Lallié, 44000 Nantes**
- SIREN : **989 289 921**
- SIRET siège : **989 289 921 00011** · SIRET restaurant : **989 289 921 00029**
- TVA : **FR60989289921**
- APE : **56.10A — Restauration traditionnelle** (cohérent avec l'activité)
- Immatriculation : **7 juillet 2025**
- Gérants : **Benjamin Louis Michel Ceuignet**, **Anaïs Coulon**
- Coordonnées GPS du siège : **47.2337637952057, -1.53438351369279** (siège, *pas* le
  restaurant — ne pas les injecter dans le JSON-LD `Restaurant` de `index.html`)
- État administratif : **actif**

> **Société antérieure, même enseigne** : `ABC`, SIREN **825 052 822**, enseigne CUIT LU CRU,
> **5 rue Chateaubriand** — établissement **fermé**. L'éditeur du site est bien **ABCC**.
> Voir § 1.3.

---

## 3. Pages légales : ce qui a été créé, et ce qui ne l'a pas été

### Créées

| Page | Pourquoi |
|---|---|
| `mentions-legales.html` | Obligatoire (art. 6 III LCEN) pour tout site édité par une société. Contient la mention « vente d'alcool » (art. L3342-1 CSP). |
| `confidentialite.html` | Transparence RGPD sur les journaux de l'hébergeur et les liens sortants, même sans collecte. Contient la section cookies (ancre `#cookies`). |

Rubrique : **« Lu et approuvé »** — le restaurant s'appelle Cuit **Lu** Cru, et « lu et
approuvé » est la formule qu'on écrit au bas d'un document qu'on signe. Les pages légales
sont la part du site qu'on lit vraiment.

### Volontairement non créées

| Page | Pourquoi pas |
|---|---|
| **CGV** | Ce site ne vend rien : aucun paiement, aucun panier, aucun module de réservation. Les boutons « Réserver » sont des liens `tel:`. Si la maison vend des prestations qui le justifient (privatisation, groupes, bons cadeaux), ses CGV sont un document distinct — un emplacement `[à fournir]` est prévu dans `mentions-legales.html`. **Aucune CGV n'a été trouvée sur le site existant.** |
| **CGU** | Aucun compte, aucun contenu déposé par l'utilisateur, aucun service interactif. Sans objet. |
| **Droit de rétractation** | Pas de vente à distance depuis ce site. |
| **Bannière de consentement cookies** | Voir § 4. |

---

## 4. Cookies, traceurs, données

### Ce que le site fait réellement — vérifié le 17 juillet 2026

| | |
|---|---|
| Cookies déposés | **aucun** — aucune occurrence de `cookie` dans le HTML ou le JS |
| Stockage local | **aucun** — aucun `localStorage`, aucun `sessionStorage` |
| Mesure d'audience | **aucune** — ni `gtag`, ni `analytics`, ni `fbq` |
| Requêtes vers des tiers | **aucune**, depuis le rapatriement des polices (voir ci-dessous) |
| Iframes | **aucune** — pas de carte Google Maps intégrée, l'itinéraire est un lien sortant |
| Formulaires | **aucun** |
| Comptes utilisateurs | **aucun** |
| Newsletter | **aucune** |
| Paiement | **aucun** |

Liens sortants présents dans les pages (rien n'est chargé tant qu'on ne clique pas) :
Instagram, Facebook, Google Maps, et le lien `tel:` de réservation.

### Pourquoi il n'y a pas de bannière

L'article 82 de la loi Informatique et Libertés impose le consentement **avant tout dépôt de
cookie non strictement nécessaire**. Aucun cookie n'étant déposé, il n'y a rien à consentir.
Une bannière serait une gêne sans objet. C'est un choix argumenté, pas un oubli.

**Ce qui déclencherait l'obligation d'en poser une :**

- ajouter Google Analytics, Matomo (en mode non exempté), un pixel Meta ou tout traceur ;
- **intégrer une carte Google Maps en `<iframe>`** (aujourd'hui l'itinéraire est un simple
  lien sortant, exprès) ;
- **intégrer un module de réservation** dans les pages (voir § 1.5) ;
- intégrer une vidéo, un widget Instagram ou Facebook ;
- **recharger les polices depuis Google Fonts** — voir ci-dessous.

Dans ces cas : dispositif Refuser / Accepter / Personnaliser, refus aussi simple que
l'acceptation, aucun dépôt avant consentement, lien permanent de modification du choix dans
le pied de page.

### Polices — ce qui a changé le 17 juillet 2026

Le site chargeait **Young Serif, Newsreader, Hanken Grotesk et IBM Plex Mono depuis
`fonts.googleapis.com` et `fonts.gstatic.com`** (avec `preconnect` vers les deux). Chaque
visite transmettait donc l'adresse IP du visiteur à Google, sans consentement — le point
précis sur lequel la CNIL et plusieurs autorités européennes ont sanctionné des éditeurs.

Les quatre familles sont désormais **auto-hébergées** dans `assets/font/` (licence SIL OFL
1.1, sous-ensembles latin + latin-ext, **376 Ko**, 10 fichiers) :

- **Hanken Grotesk** — variable (wght 100→900), 1 fichier par sous-ensemble
- **Newsreader** — variable italique (wght 200→800, opsz 6→72), 1 fichier par sous-ensemble
- **Young Serif** — statique 400
- **IBM Plex Mono** — statiques 400 et 500

Les `<link>` vers Google ont été retirés d'`index.html`, les `@font-face` ajoutés en tête de
`styles.css`, et deux `preload` posés sur les polices principales.

**Test de non-régression :** ouvrir l'onglet Réseau, filtrer sur « third-party ». Le compte
doit rester à zéro.

```bash
grep -rn 'googleapis\|gstatic' . --include='*.html' --include='*.css'   # doit être vide
```

---

## 5. Autres correctifs techniques apportés

- **`main.js`** — la remise à zéro du défilement (« refresh = retour sur le hero ») effaçait
  l'ancre de l'URL au chargement. Elle aurait cassé le lien `confidentialite.html#cookies` du
  pied de page. Elle est désormais **limitée à la page d'accueil** (présence d'un `.hero`).
  Le comportement de l'accueil est inchangé.
- **`styles.css`** — le pied de page passe de 3 à 4 colonnes pour accueillir la colonne
  « Le site » (mentions légales, confidentialité, cookies). En dessous de 820 px, il reste sur
  une seule colonne, comme avant.
- **Pied de page** — ajout des liens légaux et de la signature « Création Vokum » sur les
  trois pages.

---

## 6. À vérifier après la mise en ligne

- [ ] `grep -rn "à fournir\|à confirmer" *.html` ne renvoie plus rien
- [ ] Le bouton « Réserver en ligne » pointe vers un outil réel, ou a été retiré (§ 1.5)
- [ ] Le crédit photographique est affiché (§ 1.6)
- [ ] `robots.txt` et `sitemap.xml` pointent le vrai domaine (`www.nantes.restaurant`)
- [ ] Le site est déclaré dans Google Search Console
- [ ] La fiche Google Business est cohérente avec les horaires du site
- [ ] Aucune requête tierce dans l'onglet Réseau
- [ ] `document.cookie` est vide
