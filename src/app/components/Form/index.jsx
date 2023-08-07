'use client'
import ContactFormService from '@/app/services/ContactFormService';
import React, { useState } from 'react'
import style from './Form.module.css'

export default function Form() {
    const [contactForm, setContactForm] = useState({
        nombreContacto: "",
        emailContacto: "",
        telefonoContacto: "",
        asuntoMensaje: "",
        contenidoMensaje: "",
    })
        ;
    const handleChange = (e) => {
        const value = e.target.value;
        setContactForm({ ...contactForm, [e.target.name]: value });
    }

    const saveContactForm = (e) => {
        e.preventDefault();
        ContactFormService(contactForm)
            .then((resp) => {
                console.log(resp)
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className={style.formContainer}>
            <div className={style.title}>
                <h2>Contáctanos</h2>
                <p>Requerimiento de productos, información y comentarios.</p>
            </div>
            <form className={style.contactForm}
                onSubmit={saveContactForm}
                method='post'>
                <label htmlFor='name'>Nombre:</label>
                <input
                    id='name'
                    type="text"
                    name="nombreContacto"
                    autoComplete='name'
                    value={contactForm.nombreContacto}
                    required
                    onChange={(e) => handleChange(e)} />
                <br />
                <label htmlFor='email'>Email:</label>
                <input
                    id='email'
                    type="email"
                    name="emailContacto"
                    value={contactForm.emailContacto}
                    autoComplete='email'
                    required
                    onChange={(e) => handleChange(e)} />
                <br />
                <label htmlFor='phone'>Teléfono {'(56912345678)'}:</label>
                <input
                    id='phone'
                    type="text"
                    name="telefonoContacto"
                    autoComplete='tel'
                    required
                    value={contactForm.telefonoContacto}
                    onChange={(e) => handleChange(e)} />
                <br />
                <label htmlFor='subject'>Asunto:</label>
                <input
                    id='subject'
                    type="text"
                    name="asuntoMensaje"
                    autoComplete='off'
                    value={contactForm.asuntoMensaje}
                    required
                    onChange={(e) => handleChange(e)} />
                <br />
                <label htmlFor='message'>Mensaje:</label>
                <textarea
                    id='message'
                    name="contenidoMensaje"
                    rows={4}
                    cols={50}
                    value={contactForm.contenidoMensaje}
                    required
                    onChange={(e) => handleChange(e)} />
                <br />
                <input className={style.btn} type="submit" value="Enviar"  ></input>
            </form>
        </div>
    )
}