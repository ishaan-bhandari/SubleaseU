#syncing the flask app
from flask import Flask, jsonify, request
from flask import Response
from pymongo import MongoClient
from bson import ObjectId
from flask_cors import CORS
import json

# change to shared mongo link (if we ever make one)
client = MongoClient('mongodb://localhost:27017/') 
db = client['sublease'] 
collection = db['listings'] 

app = Flask(__name__)
CORS(app)

@app.route('/')
def default():
    return "default page"


@app.route('/api')
def get_data():
    data = {'message':'Server Online'}
    print("CALLED API")
    return jsonify(data)

@app.route('/listings')
def get_listings():
    # replace with mongodb call
    cursor = collection.find({})
    data = list(cursor)
    print(data)
    for item in data:
        item['_id'] = str(item['_id'])
    print(data)
    return Response(json.dumps(data),  mimetype='application/json')

@app.route('/post-listing', methods=['POST'])
def post_listing():
    data = request.json

    collection.insert_one(data)

    print(data)
    return 'Data Added'

@app.route('/delete-listing/<string:id>', methods=['DELETE'])
def delete_listing(id):

    result = collection.delete_one({'_id': ObjectId(id)})
    return 'Listing Deleted'

if __name__ == '__main__':
    app.run(debug=False, port=8000)

#end sync