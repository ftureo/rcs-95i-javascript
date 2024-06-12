console.log("Starting in asynchronism.js!")

// setTimeout(() => {
//     console.log('Inside setTimeout')
//     console.log('Inside setTimeout 2')
// }, 300)

// console.log("After setTimeout")

// setTimeout(callback, 3000)

// function callback() {
//     console.log('Inside callback')
// }
// setTimeout((callback) => {
//     console.log('Inside setTimeout')
//     callback()
// }, 1000)

// main - container

const mainContainer = document.getElementById('main-container')
const buttonDoRequest = document.getElementById("doRequest")

const urlBase = "https://rickandmortyapi.com/api"
// const urlBase = "https://jsonplaceholder.org/"
const resourcePath = "/character"
// const resourcePath = "/posts"

//expected url: https://rickandmortyapi.com/api/character
const url = `${urlBase}${resourcePath}`

console.log({ urlBase, resourcePath, url })

// Voy a implementar fetch
const fetchRickAndMorty = () => {
    fetch(url) // Este recurso y por lo tanto la petición, es una operación asincrónica, entonces puede demorar X cantidad de tiempo
        .then((response) => {
            console.log("Veamos la respuesta", response)

            return response.json()
        })
        .then((data) => {
            console.log("Veamos los datos", data.results)
            data.results.forEach((card) => {
                const cardElement = renderCard(card)
                mainContainer.appendChild(cardElement)

            })
        })
        .catch((error) => {
            console.error("Veamos el error", error)
        })
}

const renderCard = (cardToRender) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    const cardTitle = document.createElement('h5')
    cardTitle.classList.add('card-title')
    cardTitle.textContent = cardToRender.name


    const imageCard = document.createElement('img')
    imageCard.src = cardToRender.image
    imageCard.classList.add('card-img-top', "w-50")

    const statusInfo = document.createElement('p')
    statusInfo.textContent = `Status: ${cardToRender.status}`


    cardBody.appendChild(cardTitle)
    cardBody.appendChild(imageCard)
    cardBody.appendChild(statusInfo)

    card.appendChild(cardBody)

    return card
}


buttonDoRequest.addEventListener('click', () => {
    console.log("Do request")
    fetchRickAndMorty()
})