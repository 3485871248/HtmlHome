const hitokoto = document.getElementById('hitokoto-text')

fetch('https://v1.hitokoto.cn/?encode=text&c=d')
    .then(response => response.text())
    .then(data => {
        hitokoto.innerText = data
    })
    .catch(console.error)
