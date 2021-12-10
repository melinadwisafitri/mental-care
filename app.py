from flask import Flask, render_template, Response, jsonify, request
import os
import system_api

app = Flask(__name__, template_folder='template')


@app.route('/', methods=["GET", "POST"])
def home():
    return render_template("chat.html")


@app.route('/chatbot', methods=["GET", "POST"])
def chat_response():
    global responses
    if request.method == 'POST':
        the_question = request.form['question']
        responses = system_api.chat_response(the_question)
    return jsonify({"message": '200', "answer": responses})
    # return jsonify({"answer": response})


@app.route('/try', methods=['GET', "POST"])
def try_it():
    global res
    if request.method == 'POST':
        name = request.form['question']
        res = system_api.chat_response(name)
    return jsonify({"answer": res, "message": "ok"})


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")
