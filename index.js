let openModal = document.getElementById("open-modal")

openModal.addEventListener('click', function() {
    document.getElementById("overlay").style.display = "block"
})

document.getElementById("close-modal").addEventListener('click', function() {
    document.getElementById("overlay").style.display = "none"
})