# 🚀 Mon Projet Fullstack Dockerisé

Ce projet est une application web fullstack composée d’un **frontend en React (Vite)** et d’un **backend en Node.js (Express)**, connectés à une base de données **MySQL**, le tout orchestré via **Docker Compose**.

---

## 🧱 Structure du projet

```
mon-projet/
├── backend/             # Serveur Express (Node.js)
│   ├── app.js
│   └── ...
├── frontend/            # Application React (Vite)
│   ├── src/
│   ├── index.html
│   └── ...
├── docker-compose.yml   # Configuration des services Docker
├── README.md
└── .gitignore
```

---

## 📦 Technologies utilisées

- 🧠 **React (Vite)** – Frontend rapide & moderne
- 🔧 **Express.js** – API backend
- 🐬 **MySQL 8** – Base de données relationnelle
- 🐳 **Docker & Docker Compose** – Conteneurisation
- 🐙 **Git** – Versionnage (avec SSH recommandé)

---

## 🚀 Lancer le projet en local

> 💡 **Prérequis :** [Docker](https://www.docker.com/products/docker-desktop) installé sur ta machine.

```bash
# 1. Cloner le projet
git clone git@github.com:TON-UTILISATEUR/mon-projet.git
cd mon-projet

# 2. Lancer tous les services
docker compose up --build
```

- Frontend : [http://localhost:5173](http://localhost:5173)
- Backend : [http://localhost:3000](http://localhost:3000)
- MySQL : port `3306` (voir identifiants plus bas)

---

## 🔐 Configuration MySQL

Les variables d’environnement MySQL sont définies dans `docker-compose.yml` :

```yaml
MYSQL_ROOT_PASSWORD: rootpassword
MYSQL_DATABASE: myappdb
MYSQL_USER: user
MYSQL_PASSWORD: password
```

Tu peux te connecter à la base via un client comme **DBeaver**, **TablePlus**, ou en ligne de commande :

```bash
mysql -h 127.0.0.1 -P 3306 -u user -p
```

---

## 💻 Commandes utiles

```bash
# Lancer uniquement le frontend
docker compose up frontend

# Lancer uniquement le backend
docker compose up backend

# Rebuild complet (sans cache)
docker compose build --no-cache

# Accéder au terminal d'un conteneur (ex : frontend)
docker compose exec frontend sh
```

---

## 📁 .gitignore

Le fichier `.gitignore` est configuré pour ignorer tous les `node_modules`, fichiers temporaires, variables d’environnement, etc.

---

## 🛠️ Fonctionnalités prévues

- ✅ Hot reload côté frontend
- ✅ Proxy entre frontend et backend
- ✅ API REST avec Express
- ✅ Stockage des données en MySQL
- 🔄 (à venir) Authentification, formulaire, etc.

---

## 🧠 Auteur

Projet développé par **Lounes** – *auto-hébergé, sans `npm` installé en local 😎*

---

## ☁️ Déploiement (optionnel)

Ce projet peut être déployé sur un VPS ou sur des services comme **Render**, **Railway**, **Fly.io**, ou **Netlify + backend externe**.
