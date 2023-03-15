const testButton = document.querySelector('.open-test')
const testModal = document.querySelector('#modal1')
const closer = document.querySelector('.modal__x')
const images = document.querySelectorAll('.gallery img')
const modalImage = document.querySelector('.modal__image img')
const spinner = document.querySelector('.modal__spinner')
const errorMessage = document.querySelector('.modal__error')

function openModal(path) {
    errorMessage.style.display = 'none'
    modalImage.style.display = 'none'
    spinner.style.removeProperty('display')
    testModal.style.removeProperty('display')
    setTimeout(() => {testModal.classList.add('active')}, 1)

    const img = new Image()
    img.onload = () => {
        setTimeout(() => {
            spinner.style.display = 'none'
            modalImage.style.removeProperty('display')
            modalImage.setAttribute('src', path)
        }, 2000)
    }
    img.onerror = () => {
        setTimeout(() => {
            spinner.style.display = 'none'
            errorMessage.style.removeProperty('display')
        }, 2000)
    }
    img.setAttribute('src', path)
}

function hideModal() {
    testModal.classList.remove('active')
    setTimeout(() => {testModal.style.display = 'none'}, 200)
}

testButton.addEventListener('click', () => {
    images[0].getAttribute('src')
    openModal(images[0].getAttribute('src'))
})

closer.addEventListener('click', () => {
    hideModal()
})

for (const element of images) {
    let p = element.getAttribute('data-src')
    element.addEventListener('click', () => {
        openModal(p)
    })
}

testModal.addEventListener('click', () => {
    hideModal()
})

document.addEventListener('keydown', (event) => {
    if (event.key == 'Escape') {
        hideModal()
    }
})