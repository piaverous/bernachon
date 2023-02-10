# The "google" provider enables us to provision cloud resources on Google Cloud
# Platform.
provider "google" {
  region  = "europe-west6"
  project = "bernachon-2021"
}

terraform {
  # At the root of a layer (ie, the directory where "terraform apply" is run),
  # best practice is to specify an exact version of Terraform to use. Use the
  # "= 1.2.3" constraint to do this.
  #
  # In a module, you can allow more flexibility with regards to Terraform's
  # minor and/or patch versions. For example, the "~> 1.0" constraint will allow
  # all 1.x.x versions of Terraform, while the "~> 1.0.0" constraint will allow
  # all 1.0.x versions.
  #
  # For more information: https://www.terraform.io/docs/language/settings/index.html#specifying-a-required-terraform-version
  required_version = ">= 1.3.5"

  # Terraform keeps track of all resources it knows of in its state. This state
  # can be stored remotely in a "backend".
  # For more information on state backends: https://www.terraform.io/docs/language/settings/backends/index.html
  # For more information on the "gcs" backend: https://www.terraform.io/docs/language/settings/backends/gcs.html
  backend "gcs" {
    bucket = "bernachon-terraform-state"
    prefix = "prod"
  }
}
