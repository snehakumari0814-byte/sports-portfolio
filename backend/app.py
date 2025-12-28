from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allow frontend (GitHub Pages / localhost) to call this API

@app.route("/")
def home():
    return "<h1>MS Dhoni Backend</h1><p>Backend is running.</p>"

@app.route("/api/hello", methods=["GET"])
def hello():
    return jsonify({"message": "Hello from the Flask backend!"})

@app.route("/api/fan-message", methods=["POST"])
def fan_message():
    data = request.get_json() or {}
    name = data.get("name", "Anonymous")
    message = data.get("message", "")
    location = data.get("location", "")

    # For now we just echo back the data (no database)
    return jsonify({
        "status": "ok",
        "saved": True,
        "name": name,
        "message": message,
        "location": location
    }), 201

if __name__ == "__main__":
    app.run(debug=True)
