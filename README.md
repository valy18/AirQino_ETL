# README - AIRQINO\_ETL

## Description du Projet

**AIRQINO\_ETL** est un pipeline ETL (Extract, Transform, Load) conçu pour extraire, transformer et charger des données issues de l'API **AirQino** dans une base **MongoDB**, avec une visualisation via **Apache Superset**. Ce projet vise à automatiser et analyser la qualité de l'air de manière efficace.

## Objectifs

- **Extraction** des données depuis l'API AirQino.
- **Transformation** des données en calculant les moyennes journalières des polluants **CO** et **PM2.5**.
- **Stockage** des données traitées dans **MongoDB**.
- **Orchestration** du pipeline ETL avec **Apache Airflow**.
- **Visualisation** des données dans **Apache Superset**.
- **Interrogation avancée** des données avec **Apache Drill**.

## Architecture du Projet

Le projet est structuré comme suit :


## Technologies Utilisées

- **Python** (Pandas, Requests, PyMongo)
- **Apache Airflow** pour l'orchestration
- **MongoDB** pour le stockage des données
- **Apache Superset** pour la visualisation
- **Apache Drill** pour l'exploration des données
- **Docker & Docker Compose** pour la gestion des services

## Installation et Exécution

### Prérequis

- **Docker** et **Docker Compose** installés sur votre machine
- **Accès à l'API AirQino** (clé API requise)

### Installation

1. **Cloner le projet**
   ```bash
   git clone https://github.com/valy18/AirQino_ETL.git
   cd AirQino_ETL
   ```
2. **Lancer les services Docker**
   ```bash
   docker compose up -d
   ```
3. **Accéder aux services**
   user : admin
   pwd  : admin
   - **Airflow UI** : [http://localhost:8080](http://localhost:8080)
   - **Superset** : [http://localhost:8088](http://localhost:8088)
   - **Drill UI** : [http://localhost:8047](http://localhost:8047)
   - **MongoDB** : `mongodb://localhost:27017`

## Démarrage du Projet

Le projet contient un fichier `data.json` qui enregistre :

- La **dernière date** d'exécution réussie de l'ETL.
- Une liste des **ID des stations** surveillées.

Vous pouvez **ajouter d'autres ID de stations** dans ce fichier pour étendre la couverture du pipeline. La gestion de la dernière date permet  de garantir la robustesse du processus ETL.

Pour démarrer le projet :

```bash
docker compose up -d
```

Tous les services nécessaires seront lancés automatiquement.

## Exécution du Pipeline ETL

1. **Démarrer Airflow** et exécuter le DAG `airqino_etl_to_mongo.py`.
2. **Consulter les données** stockées dans MongoDB via **Superset et Drill**.
3. **Analyser et visualiser** les tendances de pollution dans **Superset**.

## Stratégie d’Automatisation

- **Planification quotidienne** de l'extraction des données via **Airflow**.
- **Monitoring des logs** intégré pour suivre les exécutions.
- **Extension future** : ajout d’un modèle de prédiction pour anticiper la qualité de l'air.

## Auteur

**Coulibaly Pekanri Kadiolotchan Valy**
