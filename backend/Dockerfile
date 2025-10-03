FROM node:18

WORKDIR /app

# Copier uniquement les fichiers de dépendances
COPY package*.json ./

# Installer nodemon en plus des dépendances
RUN npm install
RUN npm install --save-dev nodemon

# Copier le reste de l’app
COPY . .

# Exposer le port (optionnel si défini dans docker-compose)
EXPOSE 3000

# Commande de démarrage
CMD ["npx", "nodemon", "app.js"]
