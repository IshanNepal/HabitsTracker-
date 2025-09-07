from flask import Blueprint, jsonify, request
from ..models import Habits
from ..extensions import db
'''Creating Blueprint'''
app_bp = Blueprint('app', __name__)

@app_bp.route('/get-all-habits')
def get_all_habits():
    try: 
        habits = Habits.query.all()
        habitslist = [
            {'id':h.id, 
             "title":h.title, 
             "is_hobby":h.is_hobby,
             "description": h.description} 
            for h in habits]
        
        return jsonify({'message':'sucessfully fetched data', 'habits':habitslist})
    
    except Exception as e:
        return jsonify({'message':'server Error', 'habits': [], 'error':str(e)}), 500
    
@app_bp.route('/add-habit', methods=['POST'])
def add_habit():
    try: 
        data = request.json

        title = data['title']
        description = data['desc']
        is_hobby = data['is_hobby']

        if not title:
            return jsonify({'message':'missing title field'}), 404
        
        new_habbit = Habits(title=title, description=description, is_hobby=is_hobby)
        
        db.session.add(new_habbit)
        db.session.commit()

        return jsonify({'message':'sucessfully added a new habit!'}), 201
    
    except Exception as e:
        return jsonify({'message':'server Error', 'habits': [], 'error':str(e)}), 500
    
@app_bp.route('/update-habit/<int:habit_id>', methods=['PATCH', 'PUT'])
def update_habit(habit_id):
    try: 
        data = request.json
        habit_to_be_updated = Habits.query.get(habit_id)

        if not habit_to_be_updated:
            return jsonify({'message': 'the habit not found'}),404

        if 'title' in data:
            habit_to_be_updated.title = data['title']
        if 'description' in data:
            habit_to_be_updated.description = data['description']
        if 'is_hobby' in data:
            habit_to_be_updated.is_hobby = data['is_hobby']

        db.session.commit()

        return jsonify({'message':'sucessfully updated the habit!'}), 200
    
    except Exception as e:
        return jsonify({'message':'server Error', 'habits': [], 'error':str(e)}), 500
    
@app_bp.route('/delete-habit/<int:habit_id>', methods=['DELETE'])
def delete_habit(habit_id):
    try:
        habit = Habits.query.get(habit_id)

        if not habit:
            return jsonify({'message':'habit not found!'}), 404

        db.session.delete(habit)
        db.session.commit()

        return jsonify({
            'message': 'Habit deleted successfully',
            'deleted_id': habit_id
        }), 200

    except Exception as e:
        return jsonify({
            'message': 'Server Error',
            'error': str(e)
        }), 500
