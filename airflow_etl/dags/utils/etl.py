import requests
import pandas as pd
import json


import json

def extract_all_data(filepath):
    """
    Extrait les données de l'API pour toutes les stations listées dans le fichier JSON et retourne un DataFrame combiné.
    """
    with open(filepath, 'r') as f:
        data = json.load(f)
        station_ids = data["id_station"]

    # Initialiser une liste pour stocker les DataFrames de chaque station
    dfs = []

    # Récupérer les données pour chaque station et les ajouter à la liste
    for station_id in station_ids:
        url = 'https://airqino-api.magentalab.it/v3/getStationHourlyAvg/'
        api_url = f"{url}{station_id}"
        response = requests.get(api_url)
        if response.status_code == 200:
            data = response.json()
            df = pd.DataFrame(data["data"])
            df["station_id"] = station_id
            dfs.append(df)
        else:
            raise Exception(f"Erreur API pour la station {station_id} : {response.status_code}")

    # Combiner tous les DataFrames en un seul
    combined_df = pd.concat(dfs, ignore_index=True)
    return combined_df
def filter_new_data(df, last_processed_date):
    """
    Filtre les données après la dernière date traitée.
    """
    df['timestamp'] = pd.to_datetime(df['timestamp'])
    filtered_df = df[df['timestamp'] > last_processed_date]
    return filtered_df

def calculate_daily_averages(df):
    """
    Calcule les moyennes journalières pour chaque capteur.
    """
    df['timestamp'] = pd.to_datetime(df['timestamp'])
    df['date'] = df['timestamp'].dt.date
    daily_avg = df.groupby(['date','station_id'])[['CO', 'PM2.5']].mean().reset_index()
    return daily_avg

def load_data_to_mongo(data, db_name, collection_name):
    """
    Charge les données dans une collection MongoDB.
    """
    from pymongo import MongoClient

    client = MongoClient("mongodb://mongodb:27017/")
    db = client[db_name]
    collection = db[collection_name]
    data['date'] = data['date'].astype(str)
    data = data.rename(columns=lambda x: x.replace('.', '_'))
    collection.insert_many(data.to_dict(orient='records'))