import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './ContactForm.css';

function ContactForm() {
     const { register, handleSubmit, reset, formState: { errors } } = useForm();
     const [status, setStatus] = useState(null);

     const onSubmit = async (data) => {
          if (data._gotcha) return;

          setStatus(null);
          try {
               const response = await fetch('https://formspree.io/f/xrbynqdo', {
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
                              <h2>Contate-nos</h2>
                              <p className="subtitle">Entre em contato para saber mais sobre o curso</p>

                              <form onSubmit={handleSubmit(onSubmit)}>
                                   {/* Honeypot */}
                                   <input type="text" name="_gotcha" style={{ display: 'none' }} {...register('_gotcha')} />

                                   <input
                                        type="text"
                                        placeholder="Nome"
                                        {...register('name', { required: 'Nome é Necessário' })}
                                   />
                                   {errors.name && <span className="error">{errors.name.message}</span>}

                                   <input
                                        type="email"
                                        placeholder="E-mail de contato"
                                        {...register('email', {
                                             required: 'Email é Necessário',
                                             pattern: {
                                                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                  message: 'Formato de email inválido',
                                             },
                                        })}
                                   />
                                   {errors.email && <span className="error">{errors.email.message}</span>}

                                   <textarea
                                        placeholder="Escreva sua mensagem aqui..."
                                        rows="5"
                                        {...register('message', { required: 'Mensagem é Necessária' })}
                                   />
                                   {errors.message && <span className="error">{errors.message.message}</span>}

                                   <button type="submit">ENVIAR</button>
                              </form>
                         </div>


                    </div>
               </div>
          </>
     );
}

export default ContactForm;
