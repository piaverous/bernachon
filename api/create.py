from firebase_admin import credentials
from firebase_admin import firestore

import firebase_admin
import os
import csv
import json

# Use the application credentials
if os.environ.get("GCP_PROJECT"):
    firebase_admin.initialize_app()
else:
    cred = credentials.Certificate('./service-account-credentials.json')
    firebase_admin.initialize_app(cred, {
        'projectId': "bernachon-2021",
    })

db = firestore.client()



# some JSON:
x =  '{ "name":"John", "age":30, "city":"New York"}'

# parse x:
y = json.loads(x)

# the result is a Python dictionary:
print(y["age"])

with open('participants.json', newline='') as jsonfile:
    participants = json.load(jsonfile)
    for participant in participants:
        doc_ref = db.collection('participants').document(participant['name'])
        doc_ref.set(participant)
        print(f"{participant['name']} - Arr {participant['arrivee']} - Dep {participant['depart']}")