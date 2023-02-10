# Terraform state bucket

This module creates a Google Cloud Storage bucket for Terraform to store its
state in.

<!-- BEGIN_TF_DOCS -->

## Requirements

| Name                                                                     | Version |
| ------------------------------------------------------------------------ | ------- |
| <a name="requirement_terraform"></a> [terraform](#requirement_terraform) | ~> 1.0  |
| <a name="requirement_google"></a> [google](#requirement_google)          | ~> 4.18 |

## Providers

| Name                                                      | Version |
| --------------------------------------------------------- | ------- |
| <a name="provider_google"></a> [google](#provider_google) | ~> 4.18 |

## Modules

No modules.

## Resources

| Name                                                                                                                                   | Type     |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| [google_storage_bucket.terraform_state](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/storage_bucket) | resource |

## Inputs

| Name                                          | Description                                                  | Type     | Default | Required |
| --------------------------------------------- | ------------------------------------------------------------ | -------- | ------- | :------: |
| <a name="input_name"></a> [name](#input_name) | Name of the GCS bucket to create for storing Terraform state | `string` | n/a     |   yes    |

## Outputs

No outputs.

<!-- END_TF_DOCS -->
