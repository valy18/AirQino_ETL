import requests
import pandas as pd
import json


def extract_all_data(station_id):
    """
    Extrait les données de l'API et retourne un DataFrame.
    """

    url = 'https://airqino-api.magentalab.it/v3/getStationHourlyAvg/'
    api_url = f"{url}{station_id}"
    response = requests.get(api_url)
    if response.status_code == 200:
        data = response.json()
        df = pd.DataFrame(data["data"])
        print(df)
        return df
    else:
        raise Exception(f"Erreur API : {response.status_code}")


def filter_new_data(df, last_processed_date):
    """
    Filtre les données après la dernière date traitée.
    """
    return df[df['timestamp'] > last_processed_date]

def calculate_daily_averages(df):
    """
    Calcule les moyennes journalières pour chaque capteur.
    """
    df['date'] = df['timestamp'].dt.date
    daily_avg = df.groupby(['sensor_id', 'date'])[['CO', 'PM2.5']].mean().reset_index()
    return daily_avg
