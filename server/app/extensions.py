from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager

'''Creating Instances '''
cors = CORS()
db = SQLAlchemy()
jwt = JWTManager()

'''Function for Initializing the Extentions'''
def init_function(app):
    db.init_app(app)
    cors.init_app(app, supports_credentials=True)
    jwt.init_app(app)