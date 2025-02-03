# README - AIRQINO_ETL

## Description du Projet

**AIRQINO_ETL** est un pipeline de traitement de données conçu pour extraire, transformer et charger des données issues de l'API **AirQino** dans une base **MongoDB**, avec une visualisation via **Apache Superset**. Ce projet s'inscrit dans une démarche d'automatisation et d'analyse de la qualité de l'air.

## Objectifs

- **Extraction des données** depuis l'API AirQino.
- **Transformation** des données pour calculer les moyennes journalières des polluants **CO** et **PM2.5**.
- **Stockage** des données traitées dans **MongoDB**.
- **Orchestration** du pipeline ETL avec **Apache Airflow**.
- **Visualisation** des données dans **Apache Superset**.
- **Interrogation avancée** des données avec **Apache Drill**.

## Architecture du Projet

Le projet est structuré comme suit :
 ![image](https://github.com/user-attachments/assets/b551fe52-3c3d-4dc5-9468-f97f051b22b1)


## Technologies Utilisées

- **Python** (Pandas, Requests, PyMongo)
- **Airflow** pour l'orchestration
- **MongoDB** pour le stockage des données
- **Apache Superset** pour la visualisation
- **Apache Drill** pour l'exploration des données
- **Docker** pour la gestion des services

## Installation et Exécution

### Prérequis

- Docker et Docker Compose installés sur votre machine
- Accès à l'API AirQino

### Installation

1. **Cloner le projet**
   ```bash
   git clone https://github.com/valy18/AirQino_ETL.git
   cd AirQino_ETL

    Lancer les services Docker
    bash

    docker-compose up -d

    Accéder aux services
        Airflow UI : http://localhost:8080
        Superset : http://localhost:8088
        Drill UI : http://localhost:8047
        MongoDB : mongodb://localhost:27017

Démarrage du Projet

Pour démarrer le projet, exécutez simplement :
bash

docker-compose up -d

Tous les services nécessaires seront lancés automatiquement.
Exécution du Pipeline ETL

    Démarrer Airflow et exécuter le DAG airqino_etl_to_mongo.py.
    Consulter les données stockées dans MongoDB via Superset grâce à Drill.
    Analyser et visualiser les tendances de pollution dans Superset.

Stratégie d’Automatisation

    Airflow planifie l'extraction des données toutes les heures.
    Un mécanisme de monitoring des logs est intégré.
    Un modèle de prédiction pourra être ajouté pour anticiper la qualité de l'air.

Auteur

Coulibaly Pekanri Kadiolotchan Valy
