#!/bin/bash
set -e

if [ -e "/opt/airflow/requirements.txt" ]; then
  $(command -v python) -m pip install --upgrade pip
  $(command -v pip) install --user -r /opt/airflow/requirements.txt
fi

if [ ! -f "/tmp/airflow.db" ]; then
  airflow db init && \
  airflow users create \
    --username admin \
    --firstname admin \
    --lastname admin \
    --role Admin \
    --email admin@gmail.com \
    --password admin
fi

$(command -v airflow) db upgrade

exec airflow webserver