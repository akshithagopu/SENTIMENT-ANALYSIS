# SENTIMENT-ANALYSIS
# Amazon Review Sentiment Analysis

This project aims to analyze Amazon reviews and predict their sentiment using machine learning models. The project involves downloading a dataset from Kaggle, performing EDA, preprocessing, and building models using XGBoost and Decision Tree with cross-validation. The final model is then integrated with an HTML interface for user interaction.

## Features

- Download and preprocess Amazon review dataset from Kaggle.
- Perform Exploratory Data Analysis (EDA).
- Build and evaluate sentiment analysis models using XGBoost and Decision Tree.
- Integrate the trained model with an HTML interface for real-time sentiment analysis.

## Technologies Used

- Python
- Pandas
- NumPy
- Scikit-learn
- XGBoost
- TensorFlow.js
- HTML
- CSS
- JavaScript

## Installation

1. Clone the repository:
   git clone https://github.com/akshithagopu/SENTIMENT-ANALYSIS/git
   cd amazon-review-sentiment-analysis

2. Download the dataset from Kaggle

**Usage**
1. Data Exploration and Preprocessing
Open the EDA.ipynb notebook to explore the dataset and perform preprocessing.
The notebook includes steps for data cleaning, visualization, and preparation for modeling.

2. Model Training
Train models using XGBoost and Decision Tree with cross-validation in the modeling.ipynb notebook.
The notebook includes steps for feature scaling and model evaluation.

3. Integration with HTML
The trained model is saved and converted for use with TensorFlow.js.
The index.html file provides a web interface for sentiment analysis.

4. Running the HTML Interface
Open index.html in a web browser.
Enter an Amazon review in the textarea.
Click the "Analyze Sentiment" button to view the sentiment analysis result.
Project Structure
EDA.ipynb: xploratory Data Analysis and preprocessing.
modeling.ipynb: model training and evaluation.
index.html: HTML file for the web interface.
style.css: CSS file for styling the web interface.
script.js: JavaScript file for handling sentiment analysis in the web interface.
Example
To analyze the sentiment of a sample Amazon review:

Enter the following review in the textarea:
This product is amazing! It exceeded all my expectations and I would highly recommend it to anyone.
Click "Analyze Sentiment".
The result should display "Sentiment: Positive" with a negative sentiment score.

**License**
This project is licensed under the MIT License.


