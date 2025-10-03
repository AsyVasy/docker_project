# 💻 Mon Projet - Fullstack Vite + Node.js + MySQL + Prisma

Ce projet est une application **fullstack** avec un frontend en **React + Vite**, un backend en **Node.js + Express**, une base de données **MySQL**, et un ORM moderne : **Prisma**.

Le tout est orchestré avec **Docker Compose** pour un environnement de développement reproductible, sans rien installer en local (pas même Node ou npm !).

---

## 📦 Structure du projet

```
mon-projet/
│
├── frontend/        → Vite + React
│   ├── src/
│   ├── public/
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── backend/         → Node.js + Express + Prisma
│   ├── prisma/      → schema.prisma, migrations...
│   ├── routes/
│   ├── controllers/
│   ├── app.js
│   ├── package.json
│   └── .env
│
├── docker-compose.yml
├── README.md
└── .gitignore
```

---

## 🚀 Démarrage rapide

```bash
git clone git@github.com:ton-utilisateur/mon-projet.git
cd mon-projet
docker compose up --build
```

- Frontend → [http://localhost:5173](http://localhost:5173)
- Backend  → [http://localhost:3000](http://localhost:3000)

✅ **Hot reload** actif pour le frontend  
✅ Backend relancé automatiquement via **nodemon**

---

## 🔌 API Express

Le backend expose une API sur le port `3000`, accessible depuis le frontend via un **proxy Vite** (`/api/...`).

Tu peux ajouter tes routes dans `backend/routes/` et les connecter à tes contrôleurs.

---

## 🧬 Base de données & ORM (Prisma)

Le backend utilise **Prisma** comme ORM pour interagir avec une base **MySQL**.

### 📁 Fichier principal

```bash
backend/prisma/schema.prisma
```

### 📌 Commandes utiles

> Ces commandes doivent être lancées dans le conteneur `backend`.

#### Créer une migration
```bash
docker compose exec backend npx prisma migrate dev --name init
```

#### Générer les types Prisma
```bash
docker compose exec backend npx prisma generate
```

#### Lancer Prisma Studio (GUI)
```bash
docker compose exec backend npx prisma studio
```

➡️ Par défaut, Prisma se connecte à :
```
mysql://user:password@db:3306/myappdb
```

La base est créée et gérée automatiquement au lancement du projet grâce à Docker.

---

## ⚙️ Vite + React (Frontend)

Le frontend est basé sur **Vite**, pour un développement rapide et fluide.

```bash
docker compose run frontend npm install   # Installer de nouvelles dépendances
docker compose up frontend               # Lancer uniquement le frontend
```

Vite utilise le **mode développement avec hot reload** accessible à :
[http://localhost:5173](http://localhost:5173)

Le fichier `vite.config.js` configure un proxy vers le backend pour permettre des appels comme :
```js
fetch('/api/users')
```

---

## 🐳 Docker & Docker Compose

Le projet utilise `docker-compose.yml` pour tout lancer d'un coup.

### 📁 Volumes persistants

La base de données MySQL utilise un volume nommé `db_data` pour garder les données entre les redémarrages.

### 🧼 Nettoyage

```bash
docker compose down -v --remove-orphans
```

---

## 📂 .gitignore

Le fichier `.gitignore` est configuré pour ignorer :
- Tous les `node_modules` (frontend et backend)
- Les fichiers de logs, dossiers `.next` ou `.env.local` éventuels
- Les fichiers générés automatiquement

---

## ✅ À venir / TODO

- Authentification (JWT, OAuth...)
- Tests unitaires (Jest, Supertest...)
- Déploiement automatique (Railway, Vercel, Fly.io...)

---

## 📚 Ressources utiles

- [Prisma Docs](https://www.prisma.io/docs)
- [Vite Docs](https://vitejs.dev/)
- [Express Docs](https://expressjs.com/)
- [MySQL Docs](https://dev.mysql.com/doc/)
- [Docker Docs](https://docs.docker.com/)

---

## 🤝 Auteurs

Ce projet a été démarré par **[AsyVasy](https://github.com/AsyVasy)** dans le but de créer une base fullstack moderne, simple à maintenir et facile à déployer.