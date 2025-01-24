import json
from datetime import datetime

def get_last_processed_date(filepath):
    """
    Récupère la dernière date traitée à partir d'un fichier JSON.
    """
    try:
        with open(filepath, 'r') as f:
            data = json.load(f)
            return datetime.fromisoformat(data['last_processed_date'])
    except FileNotFoundError:
        return datetime.min 

def update_last_processed_date(filepath, last_date):
    """
    Met à jour la dernière date traitée dans un fichier JSON.
    """
    with open(filepath, 'w') as f:
        json.dump({'last_processed_date': last_date.isoformat()}, f)
