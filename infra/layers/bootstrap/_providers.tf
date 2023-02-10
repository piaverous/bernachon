# Terraform is a general purpose tool. To interact with specific APIs, it
# requires users to configure plugins called "providers".
# For more information: https://www.terraform.io/docs/language/providers/index.html

# The "google" provider enables us to provision cloud resources on Google Cloud
# Platform.
provider "google" {
  project = "bernachon-2021"
  region  = "europe-west6"
}
