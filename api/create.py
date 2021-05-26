from firebase_admin import credentials
from firebase_admin import firestore

import firebase_admin
import os
import csv


# Use the application credentials
if os.environ.get("GCP_PROJECT"):
    firebase_admin.initialize_app()
else:
    cred = credentials.Certificate('./service-account-credentials.json')
    firebase_admin.initialize_app(cred, {
        'projectId': "bernachon-2021",
    })

db = firestore.client()

with open('participants.csv', newline='') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',', quotechar='|')
    for row in spamreader:
        name, arr, dep = row
        doc_ref = db.collection('participants').document(name)
        doc_ref.set({
            'name': name,
            'arrivee': arr,
            'depart': dep
        })
        print(f"{name} - Arr {arr} - Dep {dep}")