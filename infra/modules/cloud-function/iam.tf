data "google_project" "this" {}

resource "google_service_account" "this" {
  account_id   = var.name
  display_name = "${var.name} GCF Service Account"
}

resource "google_project_iam_member" "datastore" {
  project = data.google_project.this.id
  role    = "roles/datastore.user"
  member  = google_service_account.this.member
}

resource "google_project_iam_member" "secrets" {
  project = data.google_project.this.id
  role    = "roles/secretmanager.secretAccessor"
  member  = google_service_account.this.member
}
