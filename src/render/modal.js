import { renderModal } from "./renderLogin";
import '../styleModal.css';
import { renderRegister } from "./renderRegister";

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

        const registerLink = document.querySelector('#register-link')

        
        registerLink.addEventListener('click', (event) => {
                event.preventDefault();
                divModal.style.display = 'none'
                button.innerText = 'Registrarse'
                button.style.backgroundColor = 'red'
                renderRegister(divModal)
        })

}




