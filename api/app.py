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


@app.get('/empty')
def empty():
    return {}


@app.get('/empty/text')
def empty_text():
    return ''

@app.get('/create')
def create_ada_lovelace():
    doc_ref = db.collection('users').document('tbombadil')
    doc_ref.set({
        'first': 'Tom',
        'last': 'Bombadil',
        'born': 3050
    })

@app.get('/read')
def read_ada_lovelace():
    users_ref = db.collection('users')
    docs = users_ref.stream()
    users_list = []

    for doc in docs:
        users_list.append(doc.to_dict())
    return users_list

@app.get('/none')
def none():
    return None


@app.get('/items/{item_id}')
def read_item(item_id: int, q: Optional[str] = None):
    return {'item_id': item_id, 'q': q}


@app.post('/items')
def post_item(item: Item, authorization: Optional[str] = Header(None)):
    if authorization is None or authorization != 'Bearer foobar':
        raise HTTPException(status_code=401)
    return item


@app.get('/cookies')
def cookies(c1: Optional[str] = Cookie(None), c2: Optional[str] = Cookie(None)):
    return {
        'c1': c1,
        'c2': c2,
    }


@app.get('/weather')
def get_weather():
    url = f"{OPEN_WEATHER_BASE}?lat={os.getenv('COORDS_LAT')}&lon={os.getenv('COORDS_LON')}&appid={os.getenv('OPENWEATHERMAP_API_KEY')}&units=metric"

    res = requests.get(url).json()
    return res


@app.get('/image')
def image():
    return Response(
        content=b'\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR\x00\x00\x00\x0c\x00\x00\x00\x0c\x08\x02\x00\x00\x00\xd9\x17\xcb\xb0\x00\x00\x00\x16IDATx\x9ccLIIa \x04\x98\x08\xaa\x18U4\x00\x8a\x00\x1c\xa2\x01D2\xdd\xa6B\x00\x00\x00\x00IEND\xaeB`\x82',
        media_type='image/png'
    )