import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from './App.styled';
import { Toaster } from 'react-hot-toast';
import Navigation from 'components/Navigation';
import { GlobalStyle } from '../GlobalStyle';

const Home = lazy(() => import('pages/Home'));
const Tweets = lazy(() => import('pages/Tweets'));

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <GlobalStyle />
      <Toaster toastOptions={{ duration: 2500 }} />
    </Container>
  );
};

export default App;
