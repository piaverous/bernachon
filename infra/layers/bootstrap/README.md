# Bootstrap layer

This layer creates GCS buckets where the other layers' state will be stored.

> ⚠️ WARNING ⚠️
>
> The project should only need to be bootstrapped once. If you don't now what
> bootstrapping means, don't do it.

Because this layer's state contains no sensitive information, we store this
state in this repository.

> ⚠️ WARNING ⚠️
>
> Make sure that no sensitive information is ever stored in this repository's
> state.

<!-- BEGIN_TF_DOCS -->

## Requirements

| Name                                                                     | Version |
| ------------------------------------------------------------------------ | ------- |
| <a name="requirement_terraform"></a> [terraform](#requirement_terraform) | = 1.1.9 |

## Providers

No providers.

## Modules

| Name                                               | Source                               | Version |
| -------------------------------------------------- | ------------------------------------ | ------- |
| <a name="module_state"></a> [state](#module_state) | ../../modules/terraform-state-bucket | n/a     |

## Resources

No resources.

## Inputs

No inputs.

## Outputs

No outputs.

<!-- END_TF_DOCS -->
