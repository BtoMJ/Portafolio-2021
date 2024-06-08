import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import emailjs from '@emailjs/browser';
import ApiKey from '../../ApiKey';
import toast, { Toaster } from 'react-hot-toast';

import email from '../../assets/mail.png';

import './Contact.css';

const notify = () => toast.success('E-mail enviado, gracias');
const notifyError = () => toast.error('Algo salió mal, vuelve a intentar');

const enviarCorreo =(e) => {
    
    e.preventDefault()
    console.log( process.env.SERVICE_ID)

    emailjs.sendForm( ApiKey.SERVICE_ID,ApiKey.TEMPLATE_ID, '#my-form',ApiKey.USER_ID )
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      notify();
      document.getElementById('name').value = ''
      document.getElementById('subject').value = ''
      document.getElementById('email').value = ''
      document.getElementById('message').value = ''
      
    }, function(err) {
      console.log('FAILED...', err);
      notifyError();
    });

}

function Contact() {
    return (
        <div className="contactContainer" id="contact">
          <div className="contact">
              <div className="contactImage">
                <img src={email} alt="Imagen Mail" />
              </div>
              <div className="contactForm">
                <div className="Form">
                    <Box sx={{ height: 130, marginTop: 2, marginBottom: 3 }}>
                        <Typography   sx={{ marginBottom: 1, fontWeight: 700 }} >
                            <p className="TitleLocation">
                                <h1>Contacta conmigo</h1>
                            </p> 
                        </Typography>
                        <Typography >
                            <p  className="SubTitleLocation">
                                Si tienes alguna consulta de mi trabajo o servicios
                                por favor comunícate conmigo, te dejo este formulario y me comunicaré pronto.   
                            </p> 
                        </Typography>
                    </Box>
                    <Box sx={{margin: "50px 0", marginTop: "60px"}}>
                        <form onSubmit = {enviarCorreo} style={{display: "flex", flexDirection: "column"}} id="my-form" name="my-form">
                            <input className="InputFormContact" type="text" name="name" id="name" placeholder="Nombre" required></input>
                            <input className="InputFormContact" type="email" name="email" id="email" placeholder="Email"  required></input>
                            <input className="InputFormContact" type="text" name="subject" id="subject" placeholder="Asunto" required></input>
                            <textarea className="TextAreaFormContact" placeholder="Mensaje" name="message" id="message" required></textarea>
                            <input className="ButtonFormContact" type="submit" name="submit" value="Enviar"></input>
                        </form>
                    </Box>
                </div>
              </div>

          </div>
          <Toaster />
        </div>
    )
}

export default Contact
