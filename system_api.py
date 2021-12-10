import nltk
import pickle
import numpy as np
import json
import random
import urllib.request
from tensorflow.keras.models import load_model


model = load_model('model2.h5')
url = 'https://raw.githubusercontent.com/melinadwisafitri/mental-care/machine-learning/dataset/data.json'
urllib.request.urlretrieve(url, 'data.json')
with open('data.json', 'r') as file:
    dataset = json.load(file)

with open('classes.pkl', 'rb') as c:
    classess = pickle.load(c)

with open('words.pkl', 'rb') as w:
    word = pickle.load(w)


def prepare_data(text):
    text_word = nltk.word_tokenize(text)
    return text_word


def bag_word(text, words, show_detail=True):
    text_word = prepare_data(text)
    bag = [0] * len(word)
    for s in text_word:
        for i, w in enumerate(words):
            if w == s:
                bag[i] = 1
                if show_detail:
                    print("found bag %s" %w)
    return np.array(bag)

def predict_chat(text, model):
    predict = bag_word(text, word, show_detail=False)
    res = model.predict(np.array([predict]))[0]
    values = [[i, r] for i, r in enumerate(res)]
    values.sort(key=lambda x: x[1], reverse=True)
    return_list = []
    for r in values:
        return_list.append(({"class": classess[r[0]], "probability": str(r[1])}))
    return return_list


def responses(mental_chat, data_json):
    tag = mental_chat[0]['class']
    list_data = data_json['mental_healths']
    global val
    for i in list_data:
        if i['tag'] == tag:
            val = random.choice((i['answer']))
            break
        else:
            val = "silahkan ajukan pertanyaan lain"
    return val


def chat_response(message):
    mental_dataset = predict_chat(message, model)
    res = responses(mental_dataset, dataset)
    return res

