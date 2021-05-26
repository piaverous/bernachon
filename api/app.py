from fastapi import Cookie, FastAPI, Header, HTTPException
from fastapi.responses import PlainTextResponse, Response
from fastapi.middleware.cors import CORSMiddleware
from firebase_admin import credentials
from firebase_admin import firestore
from models import Item
from typing import Optional

import firebase_admin
import os
import requests

OPEN_WEATHER_BASE = "http://api.openweathermap.org/data/2.5/onecall"
origins = ["*"]

# Use the application credentials
if os.environ.get("GCP_PROJECT"):
    firebase_admin.initialize_app()
else:
    cred = credentials.Certificate('./service-account-credentials.json')
    firebase_admin.initialize_app(cred, {
    'projectId': "bernachon-2021",
    })

db = firestore.client()
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def root():
    return {'Dio': 'ZA WARUDOOOOO !'}

@app.get('/read')
def read_participants():
    users_ref = db.collection('participants')
    docs = users_ref.stream()
    users_list = []

    for doc in docs:
        users_list.append(doc.to_dict())
    return users_list

@app.get('/weather')
def get_weather():
    url = f"{OPEN_WEATHER_BASE}?lat={os.getenv('COORDS_LAT')}&lon={os.getenv('COORDS_LON')}&appid={os.getenv('OPENWEATHERMAP_API_KEY')}&units=metric"

    res = requests.get(url).json()
    return res
