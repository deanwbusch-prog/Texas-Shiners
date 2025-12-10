variable "domain_name" {
  description = "Root domain for the site (e.g. texas-shiners.com)."
  type        = string
}

variable "alternative_names" {
  description = "Additional domain names for the CloudFront distribution (e.g. www.texas-shiners.com)."
  type        = list(string)
  default     = []
}

variable "hosted_zone_id" {
  description = "Route 53 hosted zone ID for the root domain."
  type        = string
}

variable "default_root_object" {
  description = "Default root object served by CloudFront."
  type        = string
  default     = "index.html"
}

variable "price_class" {
  description = "CloudFront price class to control edge locations and cost."
  type        = string
  default     = "PriceClass_100"
}

variable "enable_logging" {
  description = "Whether to enable CloudFront access logging."
  type        = bool
  default     = false
}

variable "tags" {
  description = "Tags to apply to all resources."
  type        = map(string)
  default     = {}
}
