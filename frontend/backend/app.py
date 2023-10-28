#syncing the flask app
from flask import Flask, jsonify, request
from flask import Response
from flask_cors import CORS
import json


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
    data = [{'rent': '1000', 'address': '1234 Green St', 'description': 'blah blah blah', 'email': 'example@gmail.com', 'image_address': 'https://www.admissions.illinois.edu/Content/images/housing-bousfield.jpg'},
                {'rent': '1000', 'address': '1234 Green St', 'description': 'blah blah blah', 'email': 'example@gmail.com', 'image_address': 'https://www.admissions.illinois.edu/Content/images/housing-bousfield.jpg'}]
    print('LISTING API CALLED')
    return Response(json.dumps(data),  mimetype='application/json')

@app.route('/post-listing', methods=['POST'])
def post_listing():
    data = request.json  # Assuming the data is sent as JSON

    # Process the data as needed (e.g., save it to a database)
    # You can access the data using data['address'], data['rent'], etc.

    # Respond with a success message or other response
    response = {'message': 'Listing data received successfully'}
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=False, port=8000)

#end sync