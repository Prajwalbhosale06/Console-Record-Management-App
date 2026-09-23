import os

from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
import psycopg


load_dotenv()

app = Flask(__name__)
CORS(app)


def get_db_connection():
    return psycopg.connect(
        host=os.getenv("DB_HOST", "localhost"),
        port=os.getenv("DB_PORT", "5432"),
        dbname=os.getenv("DB_NAME"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD")
    )


@app.route("/")
def home():
    return jsonify({
        "message": "RecordHub API is running"
    })


@app.route("/records", methods=["GET"])
def get_records():
    conn = get_db_connection()

    try:
        with conn.cursor() as cur:
            cur.execute("""
                SELECT id, name, email, phone, course, status, notes, created_at
                FROM data
                ORDER BY created_at DESC
            """)

            rows = cur.fetchall()

            records = []

            for row in rows:
                records.append({
                    "id": row[0],
                    "name": row[1],
                    "email": row[2],
                    "phone": row[3],
                    "course": row[4],
                    "status": row[5],
                    "notes": row[6],
                    "created_at": str(row[7])
                })

            return jsonify(records)

    finally:
        conn.close()


if __name__ == "__main__":
    app.run(debug=True, port=5000)