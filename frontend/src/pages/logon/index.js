import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
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