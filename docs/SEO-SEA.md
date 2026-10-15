# SEO, SEA et IA : ce qui est fait, ce qui reste à faire

Suite du « Cahier des charges SEO, SEA et IA » du 15 octobre 2026.

## Déjà dans le code

| Sujet | Où |
|---|---|
| URL unique `https://www.kossiarou.com` | `src/lib/site.ts`, redirection du domaine nu dans `next.config.ts`, `/` vers `/fr` en 308 dans `src/proxy.ts` |
| `robots.txt` (Google, Bing, robots IA autorisés, `/api/` fermé) | `src/app/robots.ts` |
| `sitemap.xml` (19 URL françaises + accueil anglais, hreflang absolus) | `src/app/sitemap.ts` |
| `llms.txt`, manifeste, icônes, image de partage 1200 × 630 | `public/` |
| Canonique absolue, hreflang + `x-default`, Open Graph, Twitter, `robots` | `src/lib/seo.ts` |
| Données structurées : Organization (toutes les pages), WebSite, Service, FAQPage, BreadcrumbList | `src/lib/schema.ts` |
| Accueil réécrit (« Payez à l’étranger. Sans blocage. », douleurs, destinations, pays, FAQ de 8 questions) | `src/i18n/dictionaries/` |
| 17 pages françaises : 4 usages, 6 pays, ambassadeurs, sécurité, FAQ, guides, 3 pages légales | `src/content/landing-fr.ts` + `src/components/site/LandingPage.tsx` |
| Formulaire : POST `/api/waitlist`, anti-robot (honeypot), UTM, événements `generate_lead` et `join_group` | `src/components/site/SignupForm.tsx`, `src/app/api/waitlist/route.ts` |
| Mesure derrière un bandeau cookies (refuser = accepter) | `src/components/site/Analytics.tsx`, `src/lib/analytics.ts` |
| Pas d’indexation hors production (aperçus Vercel, local) | `IS_INDEXABLE` dans `src/lib/site.ts` |
| Tests | `e2e/seo.spec.ts` |

Les pages d’usage, pays, ambassadeurs, sécurité, FAQ et guides n’existent qu’en français (comme dans le cahier). En anglais, seul l’accueil existe : `/en/payer-a-dubai` renvoie une vraie 404.

## Variables d’environnement

À définir sur l’hébergeur (aucune n’est obligatoire : sans elles, aucun script de mesure n’est chargé et le bandeau cookies n’apparaît pas).

| Variable | Rôle |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Seulement si le domaine de production change (défaut `https://www.kossiarou.com`) |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager (`GTM-XXXX`). GA4, Google Ads et les événements se règlent dedans |
| `NEXT_PUBLIC_GA4_ID` | GA4 direct (`G-XXXX`), utilisé seulement si GTM n’est pas défini |
| `NEXT_PUBLIC_META_PIXEL_ID` | Pixel Meta (PageView et événement Lead dédupliqué par `event_id`) |
| `WAITLIST_WEBHOOK_URL` | Où envoyer chaque inscription (Google Sheet, Make, Zapier, back-end). Sans elle, rien n’est enregistré |
| `GOOGLE_SITE_VERIFICATION`, `BING_SITE_VERIFICATION` | Jetons de vérification Search Console et Bing Webmaster Tools |

## Événements envoyés (dataLayer)

`generate_lead` (liste, besoin), `join_group`, `click_whatsapp`, `faq_open`, `scroll_75`. Les paramètres `utm_*` du lien d’arrivée sont envoyés avec l’inscription.

Dans GTM : créer un déclencheur par événement, importer `generate_lead` dans Google Ads comme conversion, et configurer l’API Conversions de Meta côté serveur (non faite ici) avec le même `event_id`.

## À faire hors du code

1. **Redirections** : vérifier chez l’hébergeur que `kossiarou.com` et `http://` vont vers `https://www.kossiarou.com/fr` (le code ajoute la redirection du domaine nu ; le passage en https dépend de l’hébergeur). Next.js utilise un 308, équivalent d’un 301 pour Google.
2. **Search Console** : propriété de domaine (DNS), envoi de `sitemap.xml`, demande d’indexation des pages principales.
3. **Bing Webmaster Tools** : import depuis Search Console, envoi du sitemap, IndexNow (clé à poser à la racine, puis ping à chaque publication).
4. **Fiches** : Google Business Profile et Bing Places (même nom, même WhatsApp, même e-mail partout).
5. **Pages légales** : compléter `mentions-legales` (directeur de la publication, IFU, hébergeur, établissement partenaire) et faire relire `confidentialite` et `conditions` par la personne responsable. Les durées de conservation et règles de groupe sont à valider.
6. **Contenu** : le cahier prévoit 700 à 1 000 mots par page d’usage et par pays. Le gabarit est en place avec un contenu de départ ; le marketing enrichit `src/content/landing-fr.ts` (un exemple chiffré sur chaque page, les guides mensuels). Chaque promesse chiffrée doit être exacte au lancement.
7. **Visuel de l’accueil** : la photo « commerçante » du lot (`hero-commercante.webp`) n’a pas été reprise, le héros actuel garde sa photo.
8. **Google Ads** : compte au nom de Kossiarou Technology SARL et vérification de l’annonceur avant de cibler la France ou la Belgique.

## SEA : structure prête à saisir

Objectif : inscrit au groupe WhatsApp à moins de 0,50 €. Conversion unique : `generate_lead`.

| Campagne Google Ads | Page d’arrivée | Budget/jour |
|---|---|---|
| Chine, fournisseurs | `/fr/payer-fournisseur-chine` | 2 € |
| France, scolarité | `/fr/payer-scolarite-france` | 1,50 € |
| Voyage, Dubaï et USA | `/fr/payer-a-dubai` ou `/fr/payer-aux-etats-unis` | 1 € |
| Marque | `/fr` | 0,50 € |

Les mots-clés, les mots-clés négatifs et les annonces responsives sont dans la section « SEA : Google Ads et Meta » du cahier. Meta : catégorie spéciale « Produits et services financiers », 3 € par jour, une publicité par usage.

UTM à mettre sur chaque lien sortant : `utm_source` (facebook, instagram, tiktok, google, whatsapp), `utm_medium` (cpc, social, organic), `utm_campaign` (chine, scolarite, voyage, marque).
