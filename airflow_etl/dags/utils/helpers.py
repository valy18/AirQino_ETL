import json
from datetime import datetime
import pandas as pd

def get_last_processed_date(filepath):
    """
    Récupère la dernière date traitée à partir d'un fichier JSON.
    """
    try:
        with open(filepath, 'r') as f:
            data = json.load(f)
            return datetime.fromisoformat(data['last_processed_date'])
    except FileNotFoundError:
        return "2020-01-01"

def update_last_processed_date(filepath, last_date):
    """
    Met à jour la dernière date traitée dans un fichier JSON.
    """
    # Convertir last_date en pd.Timestamp si nécessaire
    if isinstance(last_date, str):
        last_date = pd.Timestamp(last_date)
    
    with open(filepath, 'w') as f:
        json.dump({'last_processed_date': last_date.isoformat()}, f)
