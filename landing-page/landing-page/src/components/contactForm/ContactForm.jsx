import React from 'react';
import { useForm } from 'react-hook-form';
import './ContactForm.css';

function ContactForm() {
     const { register, handleSubmit, formState: { errors } } = useForm();

     const onSubmit = data => {
          console.log(data);
          alert("Mensagem enviada com sucesso!");
     };

     return (
          <div className="form-wrapper">
               <div className="form-container">
                    <div className="form-left">
                         <h2>contact</h2>
                         <p className="subtitle">we want to hear from you</p>

                         <form onSubmit={handleSubmit(onSubmit)}>
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
                         <p><strong>EMAIL:</strong><br />carol@thespacecube.com</p>
                         <div className="social-icons">
                              <span>🔗</span><span>🔗</span><span>🔗</span>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default ContactForm;
