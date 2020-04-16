import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
  const [id, setId] = useState('');

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });
      console.log(response.data.name);
    }catch (err) {
      alert('Login failed, try again.');
    }
  }
  return(
    <div className="Logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero"/>
        <form>
          <h1>Logon</h1>

          <input placeholder="ID"/>
          <button className="button" type="submit">Enter</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Sign Up Now
          </Link>
        </form>
      
      </section>
      <img src={heroesImg} alt="Heroes"/>
    </div>
  );
}