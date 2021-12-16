function addChat(system, user)
{
    const list = document.querySelector("#chats")
    list.append(`<div>${user}</div>
                <div>${system}</div>`);
}

const btn = document.querySelector("#form-chat");

btn.addEventListener("submit", (e)=> {
    e.preventDefault();
    const inputs = document.querySelector('#input-question');
    const userInput = inputs.value;
    fetch('/try', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({question: userInput}),
    }).then(res => res.json())
    .then(texts => addChat(userInput, texts))
})