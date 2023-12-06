// src/components/RoomList.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setRooms } from '../redux/actions';
import { db } from '../firebase';

const RoomList = ({ rooms, setRooms }) => {
  useEffect(() => {
    const unsubscribe = db.collection('rooms').onSnapshot((snapshot) => {
      const roomsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setRooms(roomsData);
    });

    return () => {
      unsubscribe();
    };
  }, [setRooms]);

  return (
    <div>
      <h2>Salas de Chat</h2>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>{room.name}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  rooms: state.rooms,
});

const mapDispatchToProps = {
  setRooms,
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomList);
