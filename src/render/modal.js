import { renderModal } from "./renderLogin";
import '../styleModal.css';

export const modalStart = (elementbyId) => {

        const element = document.querySelector(elementbyId);
        const button = document.createElement('button');
        const divModal = document.createElement('div');
        
        button.id = 'openModal';
        button.innerText = 'Ingresar';
        divModal.className = 'modal';
        renderModal(divModal);  

        button.addEventListener('click', () => {
                divModal.style.display = 'flex';
                divModal.style.justifyContent = 'space-between'
        })
        document.body.appendChild(divModal);
        element.append(button);
        
        const closeModal = divModal.querySelector('.close');
        closeModal.addEventListener('click', () => {
                divModal.style.display = 'none';
        })

        window.addEventListener('click', (event) => {
                if (event.target === divModal) {
                        divModal.style.display = 'none';
                }
        })

}




