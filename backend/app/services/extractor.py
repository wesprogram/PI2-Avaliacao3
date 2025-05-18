import requests
import os
from dotenv import load_dotenv

load_dotenv()
API_TOKEN = os.getenv("API_TOKEN")


class ProductExtractor:
    token = API_TOKEN
    url_base = 'https://brapi.dev/api/'


    def __init__(self, product_type):
        self.product_type = product_type

    def listall(self):

        if self.product_type == 'Stock':

            url_complement = 'quote/list'
            url_listall = self.url_base + url_complement
            params = {
                'sortOrder': 'desc',
                'type': 'stock',
                'token': self.token
            }
            try:

                response = requests.get(url_listall, params=params)

                if response.status_code == 200:
                    data = response.json()
                    print(data)
                    return data

            except requests.exceptions.RequestException as e:
                print(f"An error occurred: {e}")
                return None

        if self.product_type == 'BDR':

            url_complement = 'quote/list'
            url_listall = self.url_base + url_complement
            params = {
                'sortOrder': 'desc',
                'type': 'bdr',
                'token': self.token
            }
            try:

                response = requests.get(url_listall, params=params)

                if response.status_code == 200:
                    data = response.json()
                    print(data)
                    return data

            except requests.exceptions.RequestException as e:
                print(f"An error occurred: {e}")
                return None

        if self.product_type == 'Fund':

            url_complement = 'quote/list'
            url_listall = self.url_base + url_complement
            params = {
                'sortOrder': 'desc',
                'type': 'fund',
                'token': self.token
            }
            try:

                response = requests.get(url_listall, params=params)

                if response.status_code == 200:
                    data = response.json()
                    print(data)
                    return data

            except requests.exceptions.RequestException as e:
                print(f"An error occurred: {e}")
                return None