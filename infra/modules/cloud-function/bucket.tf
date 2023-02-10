resource "random_id" "bucket_suffix" {
  byte_length = 4
}

data "archive_file" "cf_source_zip" {
  type        = "zip"
  source_dir  = "${path.module}/${var.function_source}"
  output_path = "${path.module}/tmp/cloud_function.zip"

  excludes = var.function_source_excludes
}

resource "google_storage_bucket" "this" {
  name                        = "${var.name}-source-${random_id.bucket_suffix.hex}" # Every bucket name must be globally unique
  location                    = "EU"
  uniform_bucket_level_access = true
}

resource "google_storage_bucket_object" "this" {
  name   = "${var.name}-source.zip"
  bucket = google_storage_bucket.this.name
  source = data.archive_file.cf_source_zip.output_path
}
