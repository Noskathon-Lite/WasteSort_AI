# model.py (FastAPI backend)
from fastapi import FastAPI, Request, File, UploadFile
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import base64
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array
import numpy as np
from PIL import Image
from io import BytesIO

app = FastAPI()

# Enable CORS for communication between frontend and backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace with your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the model
model = load_model("data/waste_sort_model.h5")
CLASS_NAMES = ["Recyclable", "Non-Recyclable"]  # Update these class names based on your model
@app.post("/predict")
async def predict(request: Request):
    try:
        body = await request.json()
        image_data = body.get("image")

        # Decode base64 image
        image_bytes = base64.b64decode(image_data.split(",")[1])
        img = Image.open(BytesIO(image_bytes)).resize((224, 224))  # Update size as per your model input
        img_array = img_to_array(img) / 255.0
        img_array = np.expand_dims(img_array, axis=0)

        # Perform prediction
        predictions = model.predict(img_array)
        print(f"Raw Predictions: {predictions}")  # Log raw predictions for debugging

        # Extract probability for each class
        if len(predictions[0]) == 2:  # Assuming two outputs for Recyclable and Non-Recyclable
            recyclable_prob = predictions[0][0]
            non_recyclable_prob = predictions[0][1]
        else:  # Single output case
            recyclable_prob = predictions[0][0]
            non_recyclable_prob = 1 - recyclable_prob  # Complementary probability

        # Decide based on the higher probability
        if recyclable_prob > non_recyclable_prob:
            predicted_class = "Recyclable"
            confidence = recyclable_prob
        else:
            predicted_class = "Non-Recyclable"
            confidence = non_recyclable_prob

        print(f"Predicted Class: {predicted_class}, Confidence: {confidence}")

        return JSONResponse(content={"class": predicted_class, "confidence": float(confidence)})
    except Exception as e:
        print(f"Error: {e}")
        return JSONResponse(content={"error": str(e)}, status_code=500)

@app.post("/upload")
async def upload(request: Request):
    try:
        # Get the image data from the request
        body = await request.json()
        image_data = body.get("image")

        # Decode the base64 image
        image_bytes = base64.b64decode(image_data.split(",")[1])
        img = Image.open(BytesIO(image_bytes)).resize((224, 224))  # Resize as needed
        img_array = img_to_array(img) / 255.0
        img_array = np.expand_dims(img_array, axis=0)

        # Perform prediction
        predictions = model.predict(img_array)
        print(f"Raw Predictions: {predictions}")  # Log raw predictions for debugging

        # Adjust logic for determining the class
        if len(predictions[0]) == 2:  # Two classes (Recyclable, Non-Recyclable)
            recyclable_prob = predictions[0][0]
            non_recyclable_prob = predictions[0][1]
        else:  # Single output case
            recyclable_prob = predictions[0][0]
            non_recyclable_prob = 1 - recyclable_prob  # Complementary probability

        # Decide based on the higher probability
        if recyclable_prob > non_recyclable_prob:
            predicted_class = "Recyclable"
            confidence = recyclable_prob
        else:
            predicted_class = "Non-Recyclable"
            confidence = non_recyclable_prob

        print(f"Predicted Class: {predicted_class}, Confidence: {confidence}")

        return JSONResponse(content={"class": predicted_class, "confidence": float(confidence)})
    except Exception as e:
        print(f"Error: {e}")
        return JSONResponse(content={"error": str(e)}, status_code=500)
