import { useEffect, useMemo, useState } from 'react';
import AddHero from './components/addHero';
import Container from './components/container';
import ShowHeroes from './components/showHeroes';
import logo from './logo.svg';
import io from 'socket.io-client';
import { getHeroes, mainUrl } from './services/api';
import { toast, ToastContainer } from 'react-toastify';

function App() {
  const [heroes, setHeroes] = useState([])
  const [socket, setSocket] = useState(null)



  useEffect(() => {
    if (socket) {
      socket.on('disconnect', () => {
        console.log("Disconnected from server.");
      });

      socket.on('connect_error', (error) => {
        console.error("Connection Error:", error);
      });

      socket.on('connect_timeout', (timeout) => {
        console.error("Connection Timeout:", timeout);
      });

      socket.on('update', () => {
        updateHeroes()
      });
    }
    return () => {
      socket?.disconnect();
    };

  }, [socket])


  useEffect(() => {
    const socket = io.connect(mainUrl, { transports: ['websocket'] });
    socket.on('connect', () => {
      setSocket(socket)
    });

    updateHeroes()

  }, [])


  function updateHeroes() {
    getHeroes().then(res => {
      setHeroes(res)
    }).catch((err) => {
      toast.error(err.message, {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    })
  }


  return (
    <section>
      <Container>
        <AddHero />
      </Container>
      <Container>
        <ShowHeroes heroes={heroes} />
      </Container>
      <ToastContainer />
    </section>
  );
}

export default App;
