import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setMessages } from '../redux/actions';
import { db } from '../firebase';

const Chat = ({ user, messages, setMessages }) => {
  useEffect(() => {
    // Cargar mensajes desde Firestore y actualizar el estado global
    const unsubscribe = db.collection('messages').onSnapshot((snapshot) => {
      const messagesData = snapshot.docs.map((doc) => doc.data());
      setMessages(messagesData);
    });

    return () => {
      // Detener la escucha de cambios al desmontar el componente
      unsubscribe();
    };
  }, [setMessages]);

  return (
    <div>
      {messages.map((message) => (
        <div key={message.id}>{message.text}</div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  messages: state.messages,
});

const mapDispatchToProps = {
  setMessages,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
