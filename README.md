# Texas Shiners – Production-Style Static Site on AWS

Texas Shiners is a production-style static website hosted on AWS, built with React + Vite on the frontend and Terraform-managed infrastructure on the backend side (infrastructure only, no custom API). It demonstrates how to deploy a real-world portfolio-ready site using S3, CloudFront, Route 53, and Infrastructure as Code. [web:172][web:177]

---

## Architecture

The project is split into two main parts:

- **Frontend (React + Vite)**  
  - Single-page application built with React and Vite.  
  - Compiled static assets (HTML/CSS/JS) are deployed to S3.  
  - Served globally through CloudFront as a CDN. [web:172][web:174]

- **Infrastructure (Terraform)**  
  - S3 bucket for static site hosting.  
  - CloudFront distribution in front of the S3 bucket.  
  - Route 53 DNS records for a custom domain (`texas-shiners.com`) and `www`.  
  - ACM certificate for HTTPS. [web:171][web:180]

This mirrors how many production marketing and frontend apps are deployed: static frontend, CDN in front, DNS and TLS handled via AWS. [web:172][web:177]

---

## Project Structure

```text
texas-shiners/
  frontend/
    src/
    public/
    package.json
    vite.config.js
    ...
  infrastructure/
    main.tf
    backend.tf
    providers.tf
    variables.tf
    outputs.tf
    modules/
      static_site/
        main.tf
        variables.tf
        outputs.tf
frontend/ contains the React + Vite application code.

infrastructure/ contains all Terraform configuration to provision AWS resources. [web:174][web:180]

Prerequisites
Node.js and npm (for the React + Vite frontend). [web:174]

Terraform CLI installed. [web:180]

An AWS account with credentials configured locally.

A Route 53 hosted zone and registered domain (for the production setup). [web:171][web:183]

Running the Frontend Locally
From the frontend folder:

bash
npm install
npm run dev
Then open the URL printed in the terminal (usually http://localhost:5173) to view the site locally. [web:174][web:175]

Deploying the Infrastructure
From the infrastructure folder:

Initialize Terraform:

bash
terraform init
Review the plan:

bash
terraform plan
Apply the changes:

bash
terraform apply
Terraform will create the S3 bucket, CloudFront distribution, Route 53 DNS records, and ACM certificate needed to serve the site over HTTPS with your custom domain. [web:171][web:180][web:183]

Deploying the Frontend to S3
After the infrastructure is created:

From the frontend folder:

bash
npm run build
This generates a production build (typically in dist/). Upload the build output to the S3 bucket created by Terraform (manually or using a script/CI). [web:127][web:174]

Once uploaded and CloudFront has finished propagating, the site will be available via the CloudFront domain and your Route 53 domain. [web:172][web:177]

Why This Is Production-Style
Uses AWS managed services (S3, CloudFront, Route 53, ACM) configured via Terraform for reproducibility. [web:171][web:180]

Clean separation between frontend application code and infrastructure.

HTTPS, custom domain, and global distribution via CDN, similar to real-world production setups. [web:172][web:177]

Future Extensions
This project is designed to be extensible. Possible next steps:

Add a serverless backend (API Gateway + Lambda or other services). [web:181]

Introduce CI/CD (GitHub Actions) to automate builds and S3/CloudFront deployment. [web:173]

Add environment-specific stacks (dev/stage/prod) via Terraform workspaces or separate state. [web:180]

License
Add your preferred license information here (for example, MIT) or link to a LICENSE file.

text

If you tell me your actual S3 bucket name and CloudFront URL, I can add a “Demo” section with direct links.
S3: deanbusch.cloud and Cloudfront URL: d2vv77w076wpnt.cloudfront.net
Here’s an updated README.md including a Demo section with your URLs:

text
# Texas Shiners – Production-Style Static Site on AWS

Texas Shiners is a production-style static website hosted on AWS, built with React + Vite on the frontend and Terraform-managed infrastructure (infrastructure only, no custom API). It demonstrates how to deploy a real-world portfolio-ready site using S3, CloudFront, Route 53, and Infrastructure as Code. [web:172][web:177]

---

## Demo

- **CloudFront URL:** https://d2vv77w076wpnt.cloudfront.net  
- **S3 bucket (static site hosting):** `deanbusch.cloud` (served through CloudFront, not directly exposed to users). [web:110][web:119]

---

## Architecture

The project is split into two main parts:

- **Frontend (React + Vite)**  
  - Single-page application built with React and Vite.  
  - Compiled static assets (HTML/CSS/JS) are deployed to S3.  
  - Served globally through CloudFront as a CDN. [web:172][web:174]

- **Infrastructure (Terraform)**  
  - S3 bucket for static site hosting (`deanbusch.cloud`).  
  - CloudFront distribution in front of the S3 bucket (`d2vv77w076wpnt.cloudfront.net`).  
  - Route 53 DNS records for a custom domain (for example, `texas-shiners.com`) and `www`.  
  - ACM certificate for HTTPS. [web:171][web:180]

This mirrors how many production marketing and frontend apps are deployed: static frontend, CDN in front, DNS and TLS handled via AWS. [web:172][web:177]

---

## Project Structure

```text
texas-shiners/
  frontend/
    src/
    public/
    package.json
    vite.config.js
    ...
  infrastructure/
    main.tf
    backend.tf
    providers.tf
    variables.tf
    outputs.tf
    modules/
      static_site/
        main.tf
        variables.tf
        outputs.tf
frontend/ contains the React + Vite application code.

infrastructure/ contains all Terraform configuration to provision AWS resources. [web:174][web:180]

Prerequisites
Node.js and npm (for the React + Vite frontend). [web:174]

Terraform CLI installed. [web:180]

An AWS account with credentials configured locally.

A Route 53 hosted zone and registered domain (for the production setup). [web:171][web:183]

Running the Frontend Locally
From the frontend folder:

bash
npm install
npm run dev
Then open the URL printed in the terminal (usually http://localhost:5173) to view the site locally. [web:174][web:175]

Deploying the Infrastructure
From the infrastructure folder:

Initialize Terraform:

bash
terraform init
Review the plan:

bash
terraform plan
Apply the changes:

bash
terraform apply
Terraform will create the S3 bucket, CloudFront distribution, Route 53 DNS records, and ACM certificate needed to serve the site over HTTPS with your custom domain. [web:171][web:180][web:183]

Deploying the Frontend to S3
After the infrastructure is created:

From the frontend folder:

bash
npm run build
This generates a production build (typically in dist/). Upload the build output to the S3 bucket (deanbusch.cloud) created by Terraform (manually or using a script/CI). [web:127][web:174]

Once uploaded and CloudFront has finished propagating, the site will be available via the CloudFront domain (https://d2vv77w076wpnt.cloudfront.net) and, if configured, your Route 53 domain. [web:172][web:177]

Why This Is Production-Style
Uses AWS managed services (S3, CloudFront, Route 53, ACM) configured via Terraform for reproducibility. [web:171][web:180]

Clean separation between frontend application code and infrastructure.

HTTPS, custom domain, and global distribution via CDN, similar to real-world production setups. [web:172][web:177]

Future Extensions
This project is designed to be extensible. Possible next steps:

Add a serverless backend (API Gateway + Lambda or other services). [web:181]

Introduce CI/CD (GitHub Actions) to automate builds and S3/CloudFront deployment. [web:173]

Add environment-specific stacks (dev/stage/prod) via Terraform workspaces or separate state. [web:180]

License
Add your preferred license information here (for example, MIT) or link to a LICENSE file.