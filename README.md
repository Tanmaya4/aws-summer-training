![Alt Text](https://s3.amazonaws.com/aws-mobile-hub-images/aws-amplify-logo.png)

# Image Gallery Project

<center>

[**Live: https://google.com**](https://google.com)

</center>

## Overview
This project is an image gallery application built on the AWS cloud platform. It leverages serverless architecture to provide efficient image storage, retrieval, and management. **The application is currently under development and focuses on core functionalities such as image upload, storage, and display**.

## Architecture
The application follows a serverless architecture with the following components:

* **Frontend:** A NextJs based user interface responsible for image upload and display.
* **Backend:**
  * **API Gateway:** Exposes RESTful APIs for image operations.
  * **Lambda:** Executes serverless functions to handle image processing and interactions with S3.
  * **S3:** Stores uploaded images in a secure and scalable manner.

## Functionality

* **GET:** Retrieves a list of image URLs.
* **DELETE:** Delete an image from the S3 bucket.

## Technology Stack
* **Frontend:** NextJs
* **Backend:** AWS Lambda, API Gateway
* **Storage:** Amazon S3
* **Deployment:** AWS Amplify
* **Monitoring:** AWS CloudWatch
* **Security:** AWS IAM

## Project Structure
The project is organized into the following directories:

* **frontend:** Contains the frontend code and assets.
* **backend (on AWS only):** Includes Lambda functions, API Gateway configuration, and Infrastructure as Code templates.

## Getting Started
To set up and run the project locally:
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/aws-summer-training.git
   ```
2. **Install dependencies:**
   ```bash
   cd aws-summer-training
   npm install
   ```
3. **Configure AWS credentials:**
   Set up AWS credentials using the AWS CLI or environment variables.

## Deployment
The application is deployed to AWS using AWS Amplify. The deployment process is automated and can be triggered manually or through CI/CD pipelines.

## Future Enhancements
* Implement image search and filtering.
* Add user authentication and authorization.
* Introduce image editing and manipulation capabilities.
* Explore integration with other AWS services like Cognito, DynamoDB, and Rekognition.

## Contributing
Contributions to the project are welcome. Please follow the standard contribution guidelines.

## Contact
For any inquiries or support, please contact [Tanmaya](mailto:dhtanmaya@gmail.com) 
