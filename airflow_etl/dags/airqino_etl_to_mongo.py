from airflow.decorators import dag, task
from utils.etl import extract_all_data, filter_new_data, calculate_daily_averages, load_data_to_mongo
from utils.helpers import get_last_processed_date, update_last_processed_date
from datetime import datetime
import pandas as pd
import logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@dag(schedule_interval='30 23 * * *', start_date=datetime(2021, 1, 1), catchup=False)
def airqino_etl_to_mongo():
    @task
    def extract_data():
        return extract_all_data("/opt/airflow/data.json")

    @task
    def filter_data(data):
        last_processed_date = get_last_processed_date('/opt/airflow/data.json')
        return filter_new_data(data, last_processed_date)

    @task
    def calculate_averages(data):
        return calculate_daily_averages(data)

    @task
    def load_to_mongo(data):
        load_data_to_mongo(data, "air_quality", "daily_averages")
        update_last_processed_date('/opt/airflow/data.json', data['date'].max())

    data = extract_data()
    filtered_data = filter_data(data)
    daily_averages = calculate_averages(filtered_data)
    load_to_mongo(daily_averages)

dag_instance = airqino_etl_to_mongo()