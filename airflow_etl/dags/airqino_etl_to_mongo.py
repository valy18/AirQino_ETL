from airflow.decorators import dag, task
import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..')))
from datetime import datetime
from airflow_etl.utils.etl import extract_all_data, filter_new_data, calculate_daily_averages, load_data_to_mongo
from airflow_etl.utils.helpers import get_last_processed_date, update_last_processed_date

@dag(schedule_interval='@daily', start_date=datetime(2021, 1, 1), catchup=False)
def airqino_etl_to_mongo():
    @task
    def extract_data():
        return extract_all_data("283164601")

    @task
    def filter_data(data):
        last_processed_date = get_last_processed_date('/tmp/last_processed_date.json')
        return filter_new_data(data, last_processed_date)

    @task
    def calculate_averages(data):
        return calculate_daily_averages(data)

    @task
    def load_to_mongo(data):
        load_data_to_mongo(data, "air_quality", "daily_averages")
        update_last_processed_date('/tmp/last_processed_date.json', data['date'].max())

    data = extract_data()
    filtered_data = filter_data(data)
    daily_averages = calculate_averages(filtered_data)
    load_to_mongo(daily_averages)