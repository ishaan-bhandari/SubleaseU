#syncing the flask app
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def default():
    return "default page"


@app.route('/api')
def get_data():
    data = {'message':'hello'}
    print("CALLED API")
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=False, port=8000)

#end sync