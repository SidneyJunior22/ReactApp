import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api'

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [Village, setVillage] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault(); 
 
    const data = {
      name,
      email,
      whatsapp,
      city,
      Village,
    };
    try{
      const response = await api.post('ongs', data);
      alert(`Your access ID: ${response.data.id}`);
      history.push('/');
    }catch (err) {
      alert('Error on Register, try again.');
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>
          <p>Sign Up. <br></br> Enter in the platform and help people to find the incidents from your Ong.</p>
       
       
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Sign Up Now
          </Link>
       
        </section>
        <form onSubmit={handleRegister}>
          <input 
            placeholder="ONG's name"
            value={name}
            onChange={e => setName(e.target.value)}
            />
          <input 
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
          <input 
            placeholder="whatsApp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
            />

          <div className="input-group">
            <input 
              placeholder="City"
              value={city}
              onChange={e => setCity(e.target.value)}
              />
            <input 
              placeholder="Village"
              value={Village}
              onChange={e => setVillage(e.target.value)}
              />
          </div>
          <button className="button" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}