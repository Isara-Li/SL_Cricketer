# Sri Lankan Cricketer Image Classification

## Project Overview

This project aims to classify images of Sri Lankan cricketers into four distinct classes: Dasun Shanaka, Pathum Nissanka, Wanindu Hasaranga, and Maheesh Theekshana. The project leverages machine learning techniques, specifically Support Vector Machine (SVM) models, to accurately identify and categorize the cricketers based on their images. The backend of the project is built using Python with Flask, while the frontend is developed using React and Tailwind CSS.

## Project Structure

- **Backend**: Python (Flask)
- **Frontend**: React, Tailwind CSS
- **Machine Learning Model**: SVM (Support Vector Machine)
- **Dataset**: Images of the four Sri Lankan cricketers
- **Libraries Used**: 
  - Flask
  - Scikit-learn
  - OpenCV
  - NumPy
  - Pandas
  - Matplotlib

## Detailed Description

### Data Preprocessing

The attached Jupyter notebook outlines the steps taken to preprocess the images. The preprocessing includes:

1. **Loading the Dataset**: Images of the cricketers are loaded and assigned corresponding labels.
2. **Image Resizing**: Each image is resized to a uniform size to maintain consistency during model training.
3. **Grayscale Conversion**: Images are converted to grayscale to reduce computational complexity and focus on essential features.
4. **Histogram Equalization**: Applied to improve the contrast of the images.
5. **Flattening the Images**: Converted the 2D image matrices into 1D arrays to prepare them for the SVM model.

### Model Training

- **Feature Extraction**: Relevant features are extracted from the preprocessed images to serve as input for the SVM model.
- **Splitting the Data**: The dataset is split into training and testing sets to evaluate the model's performance.
- **Model Training**: An SVM classifier is trained using the training dataset. Various kernel functions (linear, polynomial, RBF) are experimented with to find the best performing model.
- **Model Evaluation**: The trained model is evaluated on the testing dataset, and performance metrics such as accuracy, precision, recall, and F1-score are calculated.

### Backend (Flask)

The Flask backend handles the following tasks:

- **Image Upload**: Provides an endpoint for users to upload images of cricketers.
- **Image Processing**: Preprocesses the uploaded images using the same steps as the training phase.
- **Prediction**: Utilizes the trained SVM model to classify the uploaded image and returns the predicted class.

### Frontend (React & Tailwind CSS)

The React frontend is responsible for:

- **User Interface**: Provides a clean and responsive interface for users to upload images.
- **Interaction with Backend**: Sends the uploaded images to the Flask backend and displays the prediction results to the user.
- **Styling**: Tailwind CSS is used to style the application, ensuring a modern and responsive design.

## Installation and Setup

### Backend Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/sri-lankan-cricketer-classification.git
   cd sri-lankan-cricketer-classification
   ```bash

