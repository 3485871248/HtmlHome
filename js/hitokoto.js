const hitokoto = document.getElementById('Hitokoto')

fetch('https://v1.hitokoto.cn/?encode=text&c=d')
    .then(response => response.text())
    .then(data => {
        hitokoto.innerText = data
    })
    .catch(console.error)
