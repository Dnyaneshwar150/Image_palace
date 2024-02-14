# Image Vault

## Project Overview

Image Palace is a simple web application designed to securely manage user authentication and image uploads. Users can sign up, log in, and upload images, with each user's data being securely handled and stored.

### Features

- User Authentication: Sign up, log in, and log out functionalities.
- Image Upload: Authenticated users can upload and manage their images.

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Cloudinary account for image uploads

### Installation

1. Clone the repository:
   git clone https://github.com/Dnyaneshwar150/Image_palace.git
2. Install NPM packages:
   npm install
3. Create a `.env` file in the project root and fill in your MongoDB URI, Cloudinary details, and session secret:
   MONGO_URL=your_mongodb_uri
   SESSION_SECRET=your_secret
   CLOUD_NAME=your_cloudinary_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
4. Run the application:
   npm start

## Usage

After starting the application, navigate to `http://localhost:8080` to access Image Palace. New users can sign up by providing their email and password. Once registered, users can log in to access the image upload functionality.


## Contact

dnyaneshwardimble -dnyaneshwardimble25436@gmail.com

