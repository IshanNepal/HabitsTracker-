from .extensions import db

class Habits(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True, nullable = False)
    title = db.Column(db.String(105), nullable = False)
    description = db.Column(db.String(255), nullable=True)
    is_hobby = db.Column(db.Boolean, default=False)    

class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True, nullable = False)
    username = db.Column(db.String(55), nullable = False, unique=True)
    email = db.Column(db.String(36), db.ForeignKey('users.email'),nullable=False, unique=True)
    password = db.Column(db.String(24), nullable=False)