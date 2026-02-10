# Public hosted zone for texas-shiners.com
resource "aws_route53_zone" "texas_shiners" {
  name = "texas-shiners.com"

  tags = {
    Project = "TexasShiners"
    Env     = "prod"
  }
}

module "static_site" {
  source = "./modules/static_site"

  domain_name         = var.domain_name
  alternative_names   = var.alternative_names
  hosted_zone_id      = aws_route53_zone.texas_shiners.zone_id
  default_root_object = "index.html"
  price_class         = "PriceClass_100"
  enable_logging      = false
  tags                = var.project_tags
}
