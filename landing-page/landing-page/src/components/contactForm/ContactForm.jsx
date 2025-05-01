import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Instagram, Email, Language } from '@mui/icons-material';
import './ContactForm.css';

function ContactForm() {
     const { register, handleSubmit, reset, formState: { errors } } = useForm();
     const [status, setStatus] = useState(null); // 'success' | 'error' | null

     const onSubmit = async (data) => {
          if (data._gotcha) return;

          setStatus(null);
          try {
               const response = await fetch('https://formspree.io/f/xovdjgnr', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                         name: data.name,
                         email: data.email,
                         message: data.message,
                    }),
               });

               if (response.ok) {
                    setStatus('success');
                    reset();
               } else {
                    throw new Error();
               }
          } catch {
               setStatus('error');
          }
     };

     // Scroll to top and auto-hide alert
     useEffect(() => {
          if (status) {
               window.scrollTo({ top: 0, behavior: 'smooth' });

               const timer = setTimeout(() => {
                    setStatus(null);
               }, 5000);

               return () => clearTimeout(timer);
          }
     }, [status]);

     return (
          <>
               {status && (
                    <div className={`alert ${status === 'success' ? 'success-alert' : 'error-alert'}`}>
                         <span className="alert-message">
                              {status === 'success' ? '✔️ Mensagem enviada com sucesso!' : '❌ Erro ao enviar a mensagem. Tente novamente mais tarde.'}
                         </span>
                         <button className="close-alert" onClick={() => setStatus(null)}>×</button>
                    </div>
               )}

               <div className="form-wrapper" id="contato">
                    <div className="form-container">
                         <div className="form-left">
                              <h2>contact</h2>
                              <p className="subtitle">we want to hear from you</p>

                              <form onSubmit={handleSubmit(onSubmit)}>
                                   {/* Honeypot */}
                                   <input type="text" name="_gotcha" style={{ display: 'none' }} {...register('_gotcha')} />

                                   <label>Send us an Email:</label>

                                   <input
                                        type="text"
                                        placeholder="Name"
                                        {...register('name', { required: 'Name is required' })}
                                   />
                                   {errors.name && <span className="error">{errors.name.message}</span>}

                                   <input
                                        type="email"
                                        placeholder="Email Address"
                                        {...register('email', {
                                             required: 'Email is required',
                                             pattern: {
                                                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                  message: 'Invalid email format',
                                             },
                                        })}
                                   />
                                   {errors.email && <span className="error">{errors.email.message}</span>}

                                   <textarea
                                        placeholder="Message"
                                        rows="5"
                                        {...register('message', { required: 'Message is required' })}
                                   />
                                   {errors.message && <span className="error">{errors.message.message}</span>}

                                   <button type="submit">SEND</button>
                              </form>
                         </div>

                         <div className="form-right">
                              <p><strong>PHONE:</strong><br />0468 957 987</p>
                              <p><strong>EMAIL:</strong><br />teste01@teste.0101</p>
                                   <div className="footer-icons">
                                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                             <Instagram />
                                        </a>
                                        <a href="mailto:example@email.com" >
                                             <Email />
                                        </a>
                                        <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
                                             <Language />
                                        </a>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
}

export default ContactForm;
