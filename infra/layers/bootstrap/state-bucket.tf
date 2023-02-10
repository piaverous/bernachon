# Each Terraform layer's state is stored in this bucket. Each layer should use a
# different sub-path.
module "state" {
  source = "../../modules/terraform-state-bucket"

  name = "bernachon-terraform-state"
}
