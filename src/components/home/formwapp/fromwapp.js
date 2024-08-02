// src/FormComponent.js
import React, { useState } from 'react';
import QRCode from '../../../img/frame.png';
import './formwapp.css';

const FormComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = `Hello ${firstName} ${lastName}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
    {/* <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">Имя:</label>
      <input
        id="firstName"
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <br />
      <label htmlFor="lastName">Фамилия:</label>
      <input
        id="lastName"
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <br />
      <label htmlFor="phoneNumber">Телефон:</label>
      <input
        id="phoneNumber"
        type="tel"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
      />
      <br />
      <button type="submit">Отправить на WhatsApp</button>
    </form> */}
      <div className='formwapper'>
        <div className='container'>
          <h2 className='formwapper_title title2'>QR-код</h2>
          <div className='formwapper_box'>
            <div className='formwapper_text'>Для перехода на WhatsApp можете отсканировать этот QR-код</div>
            <img src={QRCode} alt='' className='qrcode'></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormComponent;
