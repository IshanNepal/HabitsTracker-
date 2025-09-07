from .extensions import db

class Habits(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True, nullable = False)
    title = db.Column(db.String(105), nullable = False)
    description = db.Column(db.String(255), nullable=True)
    is_hobby = db.Column(db.Boolean, default=False)    