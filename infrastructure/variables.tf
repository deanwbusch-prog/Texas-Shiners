variable "domain_name" {
  type        = string
  description = "Root domain for the Texas Shiners site"
  default     = "texas-shiners.com"
}

variable "alternative_names" {
  type        = list(string)
  description = "Additional domain names (e.g., www)"
  default     = ["www.texas-shiners.com"]
}

variable "project_tags" {
  type = map(string)
  default = {
    Project     = "TexasShiners"
    Environment = "prod"
    ManagedBy   = "Terraform"
  }
}
