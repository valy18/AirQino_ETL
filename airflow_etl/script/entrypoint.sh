#!/bin/bash
set -e

# Installer les dépendances à partir de requirements.txt
echo "Installing Python dependencies..."
pip install pymongo==3.11.4

# Initialiser la base de données Airflow si elle n'existe pas
if [ ! -f "/tmp/airflow.db" ]; then
  airflow db init && \
  airflow users create \
    --username admin \
    --firstname Admin \
    --lastname User \
    --role Admin \
    --email admin@example.com \
    --password admin
fi

# Mettre à jour la base de données Airflow
$(command -v airflow) db upgrade

# Démarrer le scheduler en arrière-plan
echo "Starting Airflow Scheduler..."
airflow scheduler &

# Démarrer le webserver
echo "Starting Airflow Webserver..."
exec airflow webserver -p 8080