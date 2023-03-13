const testButton = document.querySelector('.open-test')
const testModal = document.querySelector('#modal1')

testButton.addEventListener('click', () => {
    testModal.style.removeProperty('display')
    setTimeout(() => {testModal.classList.add('active')}, 1)
})