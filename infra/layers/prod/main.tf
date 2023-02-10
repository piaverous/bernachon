# Each Terraform layer's state is stored in this bucket. Each layer should use a
# different sub-path.
module "function" {
  source = "../../modules/cloud-function"

  name        = "bernachon-api-v2"
  description = "The API for bernachon website"

  function_source = "../../../api"
  function_source_excludes = [
    "private",
    "service-account-credentials.json",
    "create.py",
    "Pipfile",
    "Pipfile.lock"
  ]

  openweathermap_api_key_secret_name = "openweathermap-api-key"
}
