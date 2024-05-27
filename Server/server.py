from flask import Flask, request, jsonify
import util  # Assuming util is a module you created for image classification
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/classify_image", methods=["POST"])  # Only POST method is required here
def classify_image():
    image_data = request.json.get("image_data")  # Get image_data from JSON request body

    if image_data is None:
        return jsonify({"error": "No image data provided"}), 400

    response = jsonify(util.classify_image(image_data))
    response.headers.add("Access-Control-Allow-Origin", "*")
    print(response)

    return response

if __name__ == "__main__":
    print("Starting Python Flask Server For Sports Celebrity Image Classification")
    util.load_saved_artifacts()
    app.run(port=5000)
