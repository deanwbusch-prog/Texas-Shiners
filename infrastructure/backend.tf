terraform {
  backend "s3" {
    bucket         = "tfstate-texas-shiners"
    key            = "envs/prod/infrastructure.tfstate"
    region         = "us-east-1"
    dynamodb_table = "tf-lock-texas-shiners"
    encrypt        = true
  }
}
