import axios from 'axios'


export default function ContactFormService(contactForm) {
    return (
        axios.post('http://localhost:8080/formulario/guardar', contactForm)
    )
}
