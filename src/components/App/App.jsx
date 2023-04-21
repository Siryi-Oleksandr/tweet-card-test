import React from 'react';
// import { useSelector } from 'react-redux';
import { GlobalStyle } from 'components/GlobalStyle';
import { Toaster } from 'react-hot-toast';
import CardItem from 'components/CardItem/CardItem';
// import Loader from 'components/Loader';

function App() {
  return (
    <>
      <CardItem></CardItem>
      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
      <GlobalStyle />
    </>
  );
}

export default App;
