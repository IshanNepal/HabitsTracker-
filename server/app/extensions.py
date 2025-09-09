from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

'''Creating Instances '''
cors = CORS()
db = SQLAlchemy()

'''Function for Initializing the Extentions'''
def init_function(app):
    db.init_app(app)
    cors.init_app(app, supports_credentials=True)