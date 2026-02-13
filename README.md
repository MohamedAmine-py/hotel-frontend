# 🏨 Hôtel Grandeur - Système de Réservation en Ligne

Une application web moderne et élégante pour la réservation de chambres d'hôtel, développée avec React et Tailwind CSS.

![Hôtel Grandeur](https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80)

---



## 🎯 À Propos

**Hôtel Grandeur** est un système de réservation d'hôtel simplifié développé dans le cadre d'un projet de fin de semestre (GI3). L'application permet aux clients de consulter les chambres disponibles, de filtrer par type et prix, et de réserver en ligne facilement.

### Objectifs du Projet

- ✅ Permettre aux clients de réserver des chambres en ligne
- ✅ Gérer la disponibilité des chambres
- ✅ Afficher les informations détaillées des chambres
- ✅ Calculer automatiquement le prix total avec taxes
- ✅ Interface moderne et responsive

---

## ✨ Fonctionnalités

### Pour les Clients

- 🔍 **Navigation Intuitive** - Interface claire et facile à utiliser
- 🏠 **Catalogue de Chambres** - 15 types de chambres différentes
- 🔎 **Recherche & Filtres** - Filtrer par type, prix et capacité
- 📅 **Réservation en Ligne** - Sélection de dates et nombre de personnes
- 💰 **Calcul Automatique** - Prix total avec frais de service et taxes
- ✅ **Disponibilité en Temps Réel** - Statut "Disponible" ou "Réservée"
- 📱 **Design Responsive** - Optimisé pour mobile, tablette et desktop

### Pages Disponibles

1. **Accueil** - Hero section, fonctionnalités et chambres vedettes
2. **Chambres** - Catalogue complet avec filtres et tri
3. **Réservation** - Formulaire de réservation détaillé
4. **À Propos** - Histoire et valeurs de l'hôtel
5. **Contact** - Formulaire de contact et localisation

---

## 🛠️ Technologies Utilisées

### Frontend

- **React 18.2.0** - Bibliothèque JavaScript pour l'interface utilisateur
- **Vite 5.0.8** - Build tool ultra-rapide
- **Tailwind CSS 3.x** - Framework CSS utility-first
- **React Router DOM 6.20.0** - Navigation côté client

### Outils de Développement

- **PostCSS** - Transformation CSS
- **Autoprefixer** - Compatibilité navigateurs
- **ESLint** - Qualité du code

---

## 🚀 Installation

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

### Étapes d'Installation

1. **Cloner le repository**
```bash
git clone https://github.com/votre-username/hotel-grandeur.git
cd hotel-grandeur
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
```

4. **Ouvrir dans le navigateur**
```
http://localhost:5173
```

### Build pour Production
```bash
npm run build
```

Les fichiers optimisés seront dans le dossier `dist/`.

---

## 📁 Structure du Projet
```
hotel-frontend/
├── public/
│   └── hotel-icon.svg          # Favicon de l'hôtel
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Barre de navigation
│   │   └── RoomCard.jsx        # Carte d'affichage de chambre
│   ├── data/
│   │   └── rooms.js            # Données des 15 chambres
│   ├── pages/
│   │   ├── Home.jsx            # Page d'accueil
│   │   ├── Rooms.jsx           # Liste des chambres
│   │   ├── Reserve.jsx         # Page de réservation
│   │   ├── About.jsx           # À propos
│   │   └── Contact.jsx         # Contact
│   ├── App.jsx                 # Composant principal + Router
│   ├── main.jsx                # Point d'entrée
│   └── index.css               # Styles Tailwind + personnalisés
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

---

## 📄 Pages Principales

### 1. Accueil (`/`)

- Hero section avec image de fond
- 3 sections de fonctionnalités
- Chambres en vedette (note ≥ 4.8)
- Call-to-action pour réservation

### 2. Chambres (`/rooms`)

**Filtres disponibles:**
- Recherche par nom
- Filtrage par type (Suite, Standard, Familiale, etc.)
- Tri par prix (croissant/décroissant)
- Tri par note

**Informations affichées:**
- Photo de la chambre
- Prix par nuit (MAD)
- Note et nombre d'avis
- Capacité et superficie
- Équipements principaux
- Statut de disponibilité

### 3. Réservation (`/reserve`)

**Formulaire comprenant:**
- Sélection des dates (arrivée/départ)
- Nombre de personnes
- Informations personnelles (nom, email, téléphone)

**Récapitulatif:**
- Détails de la chambre
- Prix par nuit
- Nombre de nuits
- Frais de service (50 MAD)
- Taxes (10%)
- Prix total

### 4. À Propos (`/about`)

- Histoire de l'hôtel (depuis 1995)
- Nos valeurs (Excellence, Hospitalité, Intégrité)
- Statistiques (25+ ans, 150+ chambres, 50K+ clients)
- Équipe de direction

### 5. Contact (`/contact`)

- Formulaire de contact
- Informations de contact (adresse, téléphone, email)
- Horaires d'ouverture
- Carte Google Maps

---

## 🏨 Chambres Disponibles

| # | Nom | Type | Prix (MAD) | Capacité | Superficie | Disponibilité |
|---|-----|------|-----------|----------|------------|---------------|
| 1 | Suite Deluxe Vue Océan | Suite | 2,990 | 2 | 45m² | ✅ |
| 2 | Suite Exécutive Ville | Suite | 3,990 | 3 | 55m² | ✅ |
| 3 | Chambre Confort Classique | Standard | 1,490 | 2 | 30m² | ❌ |
| 4 | Chambre Familiale Paradis | Familiale | 2,490 | 4 | 50m² | ✅ |
| 5 | Suite Lune de Miel | Suite | 4,490 | 2 | 60m² | ✅ |
| 6 | Chambre Business Premier | Business | 1,790 | 1 | 35m² | ✅ |
| 7 | Suite Présidentielle Royale | Penthouse | 8,990 | 6 | 150m² | ❌ |
| 8 | Villa Jardin Privé | Villa | 5,490 | 4 | 90m² | ✅ |
| 9 | Chambre Zen Spa | Suite | 3,490 | 2 | 55m² | ✅ |
| 10 | Loft Moderne Artiste | Loft | 2,990 | 3 | 70m² | ✅ |
| 11 | Suite Safari Terrasse | Suite | 3,790 | 2 | 65m² | ❌ |
| 12 | Chambre Vintage Rétro | Standard | 1,690 | 2 | 35m² | ✅ |
| 13 | Suite Penthouse Skyline | Penthouse | 7,490 | 5 | 120m² | ✅ |
| 14 | Chambre Écologique Nature | Standard | 1,590 | 2 | 32m² | ✅ |
| 15 | Suite Musicale Studio | Suite | 4,290 | 3 | 75m² | ✅ |

---

## 🔌 Connexion Backend

### Pour intégrer avec votre backend PHP:

1. **API Endpoints à créer:**
```php
// Récupérer toutes les chambres
GET /api/rooms

// Récupérer une chambre spécifique
GET /api/rooms/:id

// Vérifier la disponibilité
GET /api/rooms/:id/availability?checkIn=DATE&checkOut=DATE

// Créer une réservation
POST /api/reservations
{
  "room_id": 1,
  "check_in": "2026-02-15",
  "check_out": "2026-02-20",
  "guests": 2,
  "first_name": "Jean",
  "last_name": "Dupont",
  "email": "jean@example.com",
  "phone": "+212 6XX XXX XXX"
}
```

2. **Modifier `src/data/rooms.js`:**
```javascript
// Remplacer les données statiques par un appel API
export const fetchRooms = async () => {
  const response = await fetch('http://votre-backend.com/api/rooms');
  return await response.json();
};
```

3. **Modifier `src/pages/Reserve.jsx`:**
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  const response = await fetch('http://votre-backend.com/api/reservations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  
  if (response.ok) {
    setIsSubmitted(true);
  }
};
```

---

## 📊 Base de Données (Suggestions)

### Table: `chambres`
```sql
CREATE TABLE chambres (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(255),
  type VARCHAR(50),
  capacite INT,
  prix DECIMAL(10,2),
  image VARCHAR(500),
  description TEXT,
  superficie INT,
  note DECIMAL(2,1),
  avis INT
);
```

### Table: `reservations`
```sql
CREATE TABLE reservations (
  id INT PRIMARY KEY AUTO_INCREMENT,
  chambre_id INT,
  date_arrivee DATE,
  date_depart DATE,
  nb_personnes INT,
  prenom VARCHAR(100),
  nom VARCHAR(100),
  email VARCHAR(255),
  telephone VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (chambre_id) REFERENCES chambres(id)
);
```

---


## 📝 Licence

Ce projet est réalisé dans un cadre académique.

---
