resource "google_storage_bucket" "terraform_state" {
  name     = var.name
  location = "EU"

  uniform_bucket_level_access = true

  versioning {
    enabled = true
  }
}
