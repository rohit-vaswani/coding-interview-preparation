const onLoad = () => {

    // Get DOM Elements
    const cta = document.getElementById('modalCTA')
    const container = document.getElementById('modalContainer')
    const contentContainer = document.getElementById('modalContent')
    const cross = document.getElementById('cross')


    // Register Listeners
    const label = document.createTextNode('I am a modal content New')
    contentContainer.appendChild(label)



    cta.addEventListener('click', () => {
        container.classList.remove('hideModal')
        container.classList.add('showModal')

    })

    container.addEventListener('click', (e) => {
        if(e.target.id === "modalContainer") {
            container.classList.remove('showModal')
            container.classList.add('hideModal')
        }
    })

    cross.addEventListener('click', e => {
        container.classList.remove('showModal')
        container.classList.add('hideModal')
    })





}

window.addEventListener('DOMContentLoaded', onLoad)