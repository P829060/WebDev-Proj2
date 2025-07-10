// src/pages/_app.jsx
import '../pages/Home.css';
import '../pages/Contact.css';
import '../pages/Top10.css';
import '../styles/globals.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const pageWrapperStyle = {
  position: 'relative',
  minHeight: '100vh',
  backgroundImage: `url('/header.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

const backgroundOverlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  zIndex: 0,
};

const contentWrapperStyle = {
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

export default function MyApp({ Component, pageProps }) {
  return (
    <div style={pageWrapperStyle}>
      <div style={backgroundOverlayStyle}></div>
      <div style={contentWrapperStyle}>
        <Header />
        <main style={{ flex: 1 }}>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </div>
  );
}