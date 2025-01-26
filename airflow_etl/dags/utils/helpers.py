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
    Met à jour la dernière date traitée dans un fichier JSON sans remplacer tout le contenu.
    """
    # Lire le contenu existant du fichier
    try:
        with open(filepath, 'r') as f:
            data = json.load(f)
    except FileNotFoundError:
        data = {}

    # Mettre à jour la clé 'last_processed_date'
    if isinstance(last_date, str):
        last_date = pd.Timestamp(last_date)
    data['last_processed_date'] = last_date.isoformat()

    # Écrire le contenu mis à jour dans le fichier
    with open(filepath, 'w') as f:
        json.dump(data, f, indent=4)
