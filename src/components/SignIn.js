// src/components/SignIn.js
import React from 'react';
import { connect } from 'react-redux';
import { setUser } from '../redux/actions';
import { auth } from '../firebase';

const SignIn = ({ setUser }) => {
  const handleSignIn = async () => {
    try {
      const userCredential = await auth.signInAnonymously();
      const user = userCredential.user;

      setUser({ id: user.uid, username: `Usuario${Math.floor(Math.random() * 1000)}` });
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <button onClick={handleSignIn}>Iniciar Sesión Anónima</button>
    </div>
  );
};

const mapDispatchToProps = {
  setUser,
};

export default connect(null, mapDispatchToProps)(SignIn);
