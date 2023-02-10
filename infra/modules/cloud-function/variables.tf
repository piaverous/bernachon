variable "name" {
  type        = string
  description = "Name of the cloud function"
}

variable "description" {
  type        = string
  description = "Quick description of the cloud function"
}

variable "function_source" {
  type        = string
  description = "Directory containing code to upload"
}

variable "function_source_excludes" {
  type        = set(string)
  description = "Files to exclude in upload"
}

variable "openweathermap_api_key_secret_name" {
  type        = string
  description = "Name of the secret containing the OpenWeatherMap API key"
}
