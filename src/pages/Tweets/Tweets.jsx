import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as API from '../../services/api';
import Loader from 'components/Loader/Loader';
import CardItem from 'components/CardItem/CardItem';

function Tweets() {
  const [tweets, setTweets] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setStatus('pending');
    API.getAllTweets()
      .then(data => {
        if (data?.length) {
          setStatus('resolved');
          setTweets(data);
        }
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, []);

  const handleGoBack = () => {
    navigate('/');
  };

  if (!tweets) {
    return <Loader />;
  }

  return (
    <div>
      <button type="button" onClick={handleGoBack}>
        GO back
      </button>
      <CardItem />
    </div>
  );
}

export default Tweets;
