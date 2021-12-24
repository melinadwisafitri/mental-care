from flask import Flask, render_template, jsonify, request
import systemChat
import os

app = Flask(__name__, template_folder='template')


@app.route('/', methods=["GET", "POST"])
def home():
    return render_template("index.html")


@app.route('/chat', methods=['GET', "POST"])
def try_it():
    global response, question
    if request.method == 'POST':
        question = request.form['question']
        response = systemChat.chat_response(question)
        return render_template('index.html')
    else:
        return jsonify({"answer": response, "question": question, "message": "200"})


if __name__ == '__main__':
    app.run(debug=True)
