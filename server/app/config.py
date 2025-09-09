import os
from dotenv import load_dotenv

load_dotenv()  # Load variables from .env into environment

class Config:
     SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URI", "sqlite:///default.db")
     SQLALCHEMY_TRACK_MODIFICATIONS = False
     JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY", "default_key")
    
