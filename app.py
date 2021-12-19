from flask import Flask, render_template, Response, jsonify, request
import os
import system_api

app = Flask(__name__, template_folder='template')


@app.route('/', methods=["GET", "POST"])
def home():
    return render_template("index.html")

@app.route('/chat', methods=['GET', "POST"])
def try_it():
    global response, name
    if request.method == 'POST':
        name = request.form['question']
        # name = request.form['input-question']
        response = system_api.chat_response(name)
        # print(name)
        return render_template('index.html')
    else:
        return jsonify({"answer": response, "message": "ok", "question": name})


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")
