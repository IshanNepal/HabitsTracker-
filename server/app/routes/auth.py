from flask_jwt_extended import create_access_token
from flask import Blueprint, jsonify, request
from ..models import Users
from ..extensions import db
from sqlalchemy import or_


auth_bp = Blueprint('auth', __name__)

@auth_bp.route("/register", methods=["POST"])
def register():
    try: 
        data = request.json

        if not data['username'] or not data['password'] or not data['email']:
            return jsonify({'message':'missing the required feilds'}), 404
        
        username = data['username']
        password = data['password']
        email = data['email']

        exsisting_user = Users.query.filter( or_(Users.email == email, Users.username == username)).first()

        if exsisting_user:
            return jsonify({'user already registered with this username or mail'})
        
        new_user = Users(username=username, password=password, email=email)

        db.session.add(new_user)
        db.session.commit()

        access_token = create_access_token(
        identity=username,
        additional_claims={"email":email}
        )

        return jsonify({'message':'sucessfully created the user', 'token':access_token}), 201
    
    except Exception as e:
        return jsonify({'message':'server error' , 'error':str(e)})
        
@auth_bp.route("/login", methods=["POST"])
def login():
    try: 
        data = request.json

        if not data['username'] or not data['password']:
            return jsonify({'message':'missing the required feilds'}), 400
        
        username = data['username']
        password = data['password']

        exsisting_user = Users.query.filter_by(username=username).first()

        if not exsisting_user or exsisting_user.password != password:
            return jsonify({'message':'invalid username or password'}), 401
        
        access_token = create_access_token(
        identity=username,
        additional_claims={"email": exsisting_user.email}
        )
        return jsonify({'message':'sucessfull user login', '_token':access_token}), 200
    except Exception as e:
        return jsonify({'message':'server error' , 'error':str(e)}), 500



