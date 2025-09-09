from flask import Flask
from .extensions import init_function
from .config import Config

def create_app():
    '''Function for Creating app'''
    app = Flask(__name__)
    app.config.from_object(Config)
    
    '''Initializing Extensions'''
    init_function(app)

    '''Registering BluePrint'''
    from app.routes.app import app_bp
    app.register_blueprint(app_bp, url_prefix='/api/app')
    from app.routes.auth import auth_bp
    app.register_blueprint(auth_bp, url_prefix = '/api/auth')
    return app