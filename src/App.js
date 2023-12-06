// src/App.js
import React from 'react';
import { connect } from 'react-redux';
import SignIn from './components/SignIn';
import RoomList from './components/RoomList';
import Chat from './components/Chat';
import { setUser } from './redux/actions';
import { auth } from './firebase';

class App extends React.Component {
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.props.setUser({ id: user.uid, username: `Usuario${Math.floor(Math.random() * 1000)}` });
      }
    });
  }

  render() {
    const { user } = this.props;

    return (
      <div>
        <h1>Chat Firebase App</h1>
        {user ? (
          <div>
            <RoomList />
            <Chat />
          </div>
        ) : (
          <SignIn />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
