from flask import Flask, jsonify
from flask_cors import CORS
from datetime import datetime, timezone

app = Flask(__name__)

CORS(app)

@app.route("/api/estado", methods=["GET"])
def estado():
    return jsonify({
        "sistema": "Zona Fit Evolution API",
        "estado": "activo",
        "fecha": datetime.now(timezone.utc).isoformat()
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)