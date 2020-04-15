import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>
          <p>Sign Up. <br></br> Enter in the platform and help people to find the incidents from your Ong.</p>
       
       
          <Link className="back-link" to="/register">
            <FiArrowLeft size={16} color="#E02041" />
            Sign Up Now
          </Link>
       
        </section>
        <form>
          <input placeholder="ONG's name"/>
          <input type="email" placeholder="E-mail"/>
          <input placeholder="whatsApp"/>

          <div className="input-group">
            <input placeholder="City"/>
            <input placeholder="Village" style={{ width: 500 }} />
          </div>
          <button className="button" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}