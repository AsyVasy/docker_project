# frontend/Dockerfile

FROM node:20

# Dossier de travail dans le conteneur
WORKDIR /app

# Copie des fichiers nécessaires pour installer les dépendances
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie du reste des fichiers de l'application
COPY . .

# Expose le port utilisé par Vite
EXPOSE 5173

# Commande pour lancer Vite
CMD ["npm", "run", "dev", "--", "--host"]
