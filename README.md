# Tripify

## Architecture des fichiers

L'application est structurée comme suit :

- `src/` : Contient le code source de l'application.
  - `lib/` : Contient les fonctions utilitaires et les actions de l'application.
    - `actions/` : Contient les actions de l'application, comme `createUser.ts` pour la création d'un utilisateur.
    - `map.ts` : Contient les fonctions liées à la carte.
  - `app/` : Contient le code de l'application principale.
    - `travel/` : Contient le code lié aux voyages.
      - `new-trip/` : Contient le code pour la création d'un nouveau voyage.
- `prisma/` : Contient le schéma Prisma pour la base de données.
  - `schema.prisma` : Le schéma de la base de données.

## Stack technique

- Langages : TypeScript, SQL, JavaScript
- Gestionnaire de paquets : npm
- Frameworks : React
- Base de données : PostgreSQL avec Prisma comme ORM
- Cartographie : Leaflet avec le fournisseur OpenStreetMap

## Exigences

- Node.js et npm installés sur votre machine.
- PostgreSQL installé et configuré sur votre machine.
- Un compte GitHub pour cloner le dépôt.

## Développement local

1. Clonez le dépôt sur votre machine locale.
2. Installez les dépendances avec `npm install`.
3. Configurez votre base de données PostgreSQL et mettez à jour le fichier `.env` avec l'URL de votre base de données.
4. Exécutez les migrations de la base de données avec `npx prisma migrate dev`.
5. Démarrez l'application avec `npm start`.

## Tests

Pour tester l'application localement, suivez les étapes suivantes :

1. Installez les dépendances de test avec `npm install --only=dev`.
2. Exécutez les tests avec `npm test`.

Note : Assurez-vous que votre base de données est correctement configurée avant de lancer les tests.
