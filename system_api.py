import nltk
from nltk.corpus import stopwords
import pickle
import numpy as np
import json
import random
import urllib.request
from tensorflow.keras.models import load_model
import re

# data yang telah tersimpan maka data akan di load untuk digunakan dalam proses prediksi
model = load_model('chatbot.h5')

# dataset yang digunakan untuk training juga di simpan/diambil berdasarkan resource, dan data disimpan dalam format
# ".json"
url = 'https://raw.githubusercontent.com/melinadwisafitri/mental-care/machine-learning/dataset/data.json'
urllib.request.urlretrieve(url, 'data.json')

# dataset akan di load karena data berjenis json, serta data pickle hasil dari processing text di load juga,
# supaya data daapat digunkan untuk nantinya
with open('data.json', 'r') as file:
    dataset = json.load(file)

with open('kelas.pkl', 'rb') as c:
    tag = pickle.load(c)

with open('kata.pkl', 'rb') as w:
    question = pickle.load(w)

# sebelum pertanyaan dari user di prediksi maka perlu dilakukan pengolahan text tersebut meliputi :
# melakukan tokenizer text pertanyaan menggunakan nltk
# melakukan penghapusan tanda baca dan merubah text menjadi huruf kecil semua
def prepare_question(text):
    stop_word = stopwords.words("indonesian")
    text_word = nltk.word_tokenize(text)
    text_lower = [t.lower() for t in text_word]
    text_punctuation = [re.sub(r'[^\w\s]', '', t) for t in text_lower]
    text_filter = [t for t in text_punctuation if not t.lower() in stop_word]
    return text_filter


# melakukan perubahan data dari text question dengan membagi text perbagian menggunakan nilai 0 dan 1
# bag nya/panjangnya diambil dari panjang data text dengan nilai 0 didalamnya
# kemudian data akan di loop dengan ketentuan
def bag_of_word(text, words):
    text_word = prepare_question(text)
    bag = [0] * len(question)
    for s in text_word:
        for i, w in enumerate(words):
            if w == s:
                bag[i] = 1
    return np.array(bag)

# setelah data diubah kemudian akan dilakukan prediksi terhadap pertanyaan yang diberikan user kemudian hasil
# prediksi akan clasifikasi supaya bisa mendapat rensponse yang sesuai dengan data data akan diurutkan dari 0 untuk
# mengambil response, lalu hasil dari pedict tersebut akan disamakan dengan classnya yang disimpan kedalam variable list_value
def text_classification(text, model):
    predict = bag_of_word(text, question)
    res = model.predict(np.array([predict]))[0]
    values = [[i, r] for i, r in enumerate(res)]
    values.sort(key=lambda x: x[1], reverse=True)
    list_value = []
    for r in values:
        list_value.append(({"class": tag[r[0]]}))
    return list_value


# setelah pertanyaan berhasil diklasifikasi pertanyaan akan disesuaikan dengan nama tag nya (tag sebagai kelas dari data)
# jika nama tag pertanyaan sama dengan salah satu tag di data maka akan memilih response secara random sesuai dengan pertanyaan
# dan apabila data pertanyaan tidak ada maka akan menghasil jawaban "silahkan ajukan pertanyaan lain"
# selain itu didalam data ada tag khusus yang akan meresponse data '' yang tidak memiliki kata
def responses(chat, model_data):
    tag = chat[0]['class']
    list_data = model_data['mental_healths']
    global val
    for i in list_data:
        if i['tag'] == tag:
            val = random.choice((i['answer']))
            break
        else:
            val = "silahkan ajukan pertanyaan lain"
    return val


# kemudian hasil dari penyesuaian question dengan tag,
# sistem akan memberikan response berdasarkan hasil klasifikasi dan datasetnya
# hasil ini nantinya yang akan digunakan untuk menampilkan response ke web
def chat_response(message):
    mental_dataset = text_classification(message, model)
    res = responses(mental_dataset, dataset)
    return res