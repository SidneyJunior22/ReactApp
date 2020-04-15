import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>

          <h1>Register a new Incident</h1><br></br>
          <p>Describe your case in details to find an Hero to resolve that.</p>
       
       
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Return
          </Link>
       
        </section>
        <form>
          <input placeholder="Incident Title"/>
          <textarea placeholder="Description"/>

          <input placeholder="Values in Euros"  />

          <button className="button" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}