const testButton = document.querySelector('.open-test')
const testModal = document.querySelector('#modal1')
const closer = document.querySelector('.modal__x')
const images = document.querySelectorAll('.gallery img')
const modalImage = document.querySelector('.modal__image img')

function openModal(path) {
    modalImage.setAttribute('src', path)
    testModal.style.removeProperty('display')
    setTimeout(() => {testModal.classList.add('active')}, 1)
}

function hideModal() {
    testModal.classList.remove('active')
    setTimeout(() => {testModal.style.display = 'none'}, 200)
}

testButton.addEventListener('click', () => {
    openModal()
})

closer.addEventListener('click', () => {
    hideModal()
})

for (const element of images) {
    let p = element.getAttribute('src')
    element.addEventListener('click', () => {
        openModal(p)
    })
}

document.addEventListener('keydown', (event) => {
    if (event.key == 'Escape') {
        hideModal()
    }
})