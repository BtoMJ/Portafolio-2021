import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import email from '../../assets/mail.png';
import './Contact.css';

const enviarCorreo =(e) => {
    e.preventDefault()

    emailjs.sendForm('service_ucpocop', 'template_cukym8f', e.target, 'user_Cv9Or6FaAr9dBlgkiVBHf').then(
        result => {
           
            swal("Correo enviado correctamente", {
                icon: "success",
                buttons: false,
                timer: 3000,
              });
              
            document.getElementById('name').value = ''
            document.getElementById('email').value = ''
            document.getElementById('subject').value = ''
            document.getElementById('message').value = ''
        },
        error => {
            alert( 'Ocurrio un error, intente nuevamente')
            }
    )
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
                                <h1>Ponte en contacto conmigo</h1>
                            </p> 
                        </Typography>
                        <Typography >
                            <p  className="SubTitleLocation">
                                Estaré feliz de colaborar en cualquier proyecto contigo o si tienes alguna duda acerca de mi trabajo o servicios
                                por favor comunícate conmigo, te dejo este pequeño formulario y con gusto me comunicaré a la brevedad.   
                            </p> 
                        </Typography>
                    </Box>
                    <Box sx={{margin: "50px 0"}}>
                        <form onSubmit = {enviarCorreo} style={{display: "flex", flexDirection: "column"}}>
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
        </div>
    )
}

export default Contact
