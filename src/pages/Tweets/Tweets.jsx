import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as API from '../../services/api';
import Loader from 'components/Loader/Loader';
import UsersList from 'components/UsersList/UsersList';
import { BiArrowBack } from 'react-icons/bi';
import { BtnGoBack } from 'components/Button/Button.styled';

function Tweets() {
  const [users, setUsers] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setStatus('pending');
    API.getAllUsers()
      .then(data => {
        if (data?.length) {
          setStatus('resolved');
          setUsers(data);
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

  if (!users) {
    return <Loader />;
  }

  return (
    <div>
      <BtnGoBack type="button" onClick={handleGoBack}>
        <BiArrowBack size="1.5em" />
        Go back
      </BtnGoBack>
      <UsersList users={users} />
    </div>
  );
}

export default Tweets;
