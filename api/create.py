import os
import json
import firebase_admin

from firebase_admin import credentials, firestore
from constants import FIRESTORE_COLLECTION_NAME

# Use the application credentials
if os.environ.get("GCP_PROJECT"):
    firebase_admin.initialize_app()
else:
    cred = credentials.Certificate('./service-account-credentials.json')
    firebase_admin.initialize_app(cred, {
        'projectId': "bernachon-2021",
    })

db = firestore.client()

with open('participants.json', newline='') as jsonfile:
    participants = json.load(jsonfile)
    for participant in participants:
        doc_ref = db.collection(FIRESTORE_COLLECTION_NAME).document(participant['name'])
        doc_ref.set(participant)
        print(f"{participant['name']} - Arr {participant['arrivee']} - Dep {participant['depart']}")
