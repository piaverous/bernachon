data "google_secret_manager_secret" "openweathermap" {
  secret_id = var.openweathermap_api_key_secret_name
}

resource "google_cloudfunctions2_function" "this" {
  name        = var.name
  location    = "europe-west6"
  description = var.description

  service_config {
    timeout_seconds    = 60
    available_memory   = "128Mi"
    available_cpu      = "100m"
    max_instance_count = 1

    service_account_email = google_service_account.this.email

    environment_variables = {
      GCP_PROJECT = data.google_project.this.project_id
      COORDS_LAT  = "46.331111"
      COORDS_LON  = "4.601111"
    }

    secret_environment_variables {
      key        = "OPENWEATHERMAP_API_KEY"
      project_id = data.google_project.this.project_id
      secret     = data.google_secret_manager_secret.openweathermap.secret_id
      version    = "latest"
    }
  }

  build_config {
    runtime     = "python310"
    entry_point = "entry_point"
    source {
      storage_source {
        bucket = google_storage_bucket.this.name
        object = google_storage_bucket_object.this.name
      }
    }
  }
}

# IAM entry for all users to invoke the function
resource "google_cloud_run_service_iam_binding" "public" {
  location = google_cloudfunctions2_function.this.location
  service  = google_cloudfunctions2_function.this.name

  role    = "roles/run.invoker"
  members = ["allUsers"]
}
