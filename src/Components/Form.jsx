import React, { useState } from "react";
import { ContextGlobal } from '../Components/utils/global.context';

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const { state } = ContextGlobal();
  const [formData, setFormData] = useState({ fullName: '', email: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (formData.fullName.length < 5 || !formData.email.includes('@')) {
      setError('Por favor, verifique su información nuevamente.');
      setSuccess(false);
    } else {
      setError('');
      setSuccess(true);
      // Lógica para enviar el formulario (puedes agregarlo aquí)
    }
  };

  return (
    <div className={`form ${state.theme}`}>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre Completo:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
      {error && <div className="error-message">{error}</div>}
      {success && (
        <div className="success-message">
          Gracias {formData.fullName}, te contactaremos cuando antes vía mail.
        </div>
      )}
    </div>
  );
};

export default Form;