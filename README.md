# Multi-Cloud Kubernetes Cluster with Terraform

This project contains Terraform modules to deploy a multi-cloud Kubernetes cluster on AWS (EKS) and Azure (AKS).

## Prerequisites

- [Terraform](https://learn.hashicorp.com/tutorials/terraform/install-cli) installed.
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html) installed. **Note:** Version `2.9.0` or newer is required.
- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli) installed.

## Connecting to Cloud Providers

### AWS

1.  **Configure AWS Credentials:**
    - Open your terminal and run the following command:
      ```sh
      aws configure
      ```
    - You will be prompted to enter your AWS Access Key ID, Secret Access Key, default region (e.g., `us-east-1`), and default output format (e.g., `json`). You can get these credentials from the IAM section of your AWS Console.

### Azure

1.  **Login to Azure:**
    - Open your terminal and run the following command:
      ```sh
      az login
      ```
    - This will open a new browser window for you to sign in to your Azure account.


## Deployment

Each cloud provider has its own directory (`aws` and `azure`) with a `main.tf` file.

### AWS EKS Cluster

1.  Navigate to the `aws` directory:
    ```sh
    cd aws
    ```

2.  Initialize Terraform:
    ```sh
    terraform init
    ```

3.  Review the execution plan:
    ```sh
    terraform plan
    ```

4.  Apply the configuration:
    ```sh
    terraform apply
    ```

### Azure AKS Cluster

1.  Navigate to the `azure` directory:
    ```sh
    cd azure
    ```

2.  Initialize Terraform:
    ```sh
    terraform init
    ```

3.  Review the execution plan:
    ```sh
    terraform plan
    ```

4.  Apply the configuration:
    ```sh
    terraform apply
    ```

## Outputs

Each module will output the necessary information to connect to the cluster, including the cluster endpoint and a kubeconfig file.
