class Chat {
    static answerChat(){
        return fetch('/chatbot')
        .then(response => response.json())
        .then(responJson =>{
            if(responJson){
                return Promise.resolve(responJson)
            }else {
                return Promise.reject(alert('failed send data'))
            }
        })
    }
}