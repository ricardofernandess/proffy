import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem(){
    return (
        <article className="teacher-item">
        <header>
            <img src="https://randomuser.me/api/portraits/lego/2.jpg" alt="Lego User" />
            <div>
                <strong>Mr. Lego</strong>
                <span>Química</span>
            </div> 
        </header>

        <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br /><br />
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 40,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Entrar em contato"/>
                Entrar em Contato
            </button>
        </footer>
    </article>  
    );
}

export default TeacherItem;