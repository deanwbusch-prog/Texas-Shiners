output "bucket_name" {
  description = "Name of the S3 bucket hosting the static site."
  value       = aws_s3_bucket.site_bucket.id
}

output "cloudfront_domain_name" {
  description = "CloudFront distribution domain name."
  value       = aws_cloudfront_distribution.site.domain_name
}

output "cloudfront_distribution_id" {
  description = "ID of the CloudFront distribution."
  value       = aws_cloudfront_distribution.site.id
}

output "cloudfront_hosted_zone_id" {
  description = "CloudFront Route 53 zone ID, useful when creating alias records."
  value       = aws_cloudfront_distribution.site.hosted_zone_id
}

output "site_url" {
  description = "Primary HTTPS URL for the site."
  value       = "https://${var.domain_name}"
}
