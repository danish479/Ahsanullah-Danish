
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import styles from './contactStyle.module.css'

function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_ar1129x',
        'template_rjocacq',
        form.current,
        {
          publicKey: 'U94NfAivUhBFzaFi-',
        }
      )
      .then(
        () => {
          alert('Message sent successfully! 🎉')
          form.current.reset()
        },
        (error) => {
          console.error('FAILED...', error)
          alert('Something went wrong. Please try again.')
        }
      )
  }

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>

      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>

          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>

          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          />

        </div>

        <button type="submit">
          Submit
        </button>
      </form>
    </section>
  )
}

export default Contact

