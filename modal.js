const detailModal = document.getElementById('detail-modal');
const modalWindow = document.getElementById('modal-window');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalImage = document.getElementById('modal-image');

function openModal(title, image, content) {
    modalBody.innerHTML = '';
    modalImage.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.7), rgba(60,56,54,1)), url(" + image + ")";
    modalTitle.innerHTML = title;


    createModalBody(content);
    detailModal.style.display = 'block';
}

function closeModal(e) {
    if(e.target !== detailModal) {
        return;
    }
    detailModal.style.display = 'none';
}

function createModalBody(content) {
    modalBody.innerHTML = '';

    let modalContent = document.createElement("div");
    modalContent.className = "modal-content";
    modalContent.innerHTML = content;
    modalBody.appendChild(modalContent);

}

