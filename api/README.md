# Bernachon API

This is a simple FastAPI backend. It runs in Google Cloud Functions, using `fastapi` and `agraffe`.

## Development

Install `uvicorn` locally, then run `pipenv run dev`.

## Deployment

Deploy using the `gcloud` CLI.

``` bash
gcloud functions deploy bernachon-api \
    --region europe-west6 \
    --entry-point entry_point \
    --service-account service-account-email \
    --runtime python37 \
    --trigger-http \
    --allow-unauthenticated \
    --set-env-vars AgraffeService="Google Cloud Functions"
```