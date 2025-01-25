#!/bin/bash
set -e

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