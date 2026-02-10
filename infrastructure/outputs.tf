output "site_bucket_name" {
  description = "S3 bucket name for the static site."
  value       = module.static_site.bucket_name
}

output "cloudfront_domain_name" {
  description = "CloudFront distribution domain name."
  value       = module.static_site.cloudfront_domain_name
}

output "site_url" {
  description = "Primary URL for the site."
  value       = module.static_site.site_url
}
