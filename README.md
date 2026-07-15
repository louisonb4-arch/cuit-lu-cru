# Cuit Lu Cru — Refonte site

Refonte complète de https://www.nantes.restaurant (Wix) en site statique premium.
Restaurant fait maison, 6 place Alfred Lallié, Nantes (Saint-Donatien). Depuis 2017,
réouverture 2026 après 6 mois de travaux.

## DA — « Qui l'eût cru »

- **Concept** : carnet de bistrot imprimé. Le nom est un jeu de mots (cuit-lu-cru → « qui l'eût cru ») ;
  il structure le hero et le footer.
- **Signature graphique** : les horaires à la minute près (12h01 / 19h31) — repris du vrai lettrage
  peint sur la vitrine (« Ouvert (O) quand c'est ouvert »).
- **Palette** : papier crème `#F1EBE0` · encre brune `#241B12` · terracotta façade `#A6431F` ·
  pierre `#C9BCA4`.
- **Typos** : Young Serif (titres) · Newsreader italic (accents éditoriaux) ·
  Hanken Grotesk (corps) · IBM Plex Mono (méta, prix, horaires).
- **Éléments physiques** : carte-ticket à bords perforés, points de conduite, tampon « fait maison »,
  planche contact du chantier (drag horizontal), doubles filets éditoriaux.
- Aucun zoom photo (clip-path reveal uniquement), pas d'arches, pas de cards génériques.

## Structure

Page unique : hero → horaires → 01 L'esprit → 02 La carte (dîner + « et le midi ? »)
→ 03 L'histoire (timeline 2017→2026 + chantier + remerciements) → 04 Producteurs
→ 05 Infos & réservation → footer.

## Fichiers

- `index.html` / `styles.css` / `main.js` — statique, zéro dépendance
- `assets/` — photos réelles du site existant (Wix), optimisées ≤1800px / ≤350 Ko
- SEO : title/meta/OG, JSON-LD Restaurant, `sitemap.xml`, `robots.txt`
- QA : ajouter `?noanim` à l'URL pour désactiver les animations (screenshots)

## À demander au client

1. **Lien de réservation Tableagent** — le bouton « Réserver en ligne » pointe pour l'instant
   vers l'ancien site. Remplacer le `href` dans la section `#infos` par l'URL du widget Tableagent.
2. **Menu du déjeuner** — prix/formules du midi absents de l'ancien site (la section
   « Et le midi ? » reste honnête : ardoise selon marché).
3. **Adresse e-mail** pour les demandes de groupe (actuellement tel + Instagram).
4. **Photos HD** : portrait du chef / de l'équipe en service, photos de la salle finie
   (une seule dispo en basse résolution), photo de la place Alfred Lallié de jour.
5. **Logo vectoriel** (seul un GIF 180px existe).
6. Confirmer la liste des producteurs (déduite des logos de l'ancien site).

## Lancer en local

```bash
python3 -m http.server 8742
# http://localhost:8742
```
