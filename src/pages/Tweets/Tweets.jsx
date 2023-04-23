import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as API from '../../services/api';
import Loader from 'components/Loader/Loader';
import UsersList from 'components/UsersList/UsersList';
import { BiArrowBack } from 'react-icons/bi';
import { BtnGoBack } from 'components/Button/Button.styled';
import Error from 'components/Error';
import toast from 'react-hot-toast';

function Tweets() {
  const [users, setUsers] = useState([]);
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
        if (data?.length === 0) {
          setStatus('resolved');
          setUsers(data);
          toast.success("Unfortunately you don't have any tweets yet!");
        }
      })
      .catch(error => {
        toast.error('Something went wrong 😥!');
        setError(error);
        setStatus('rejected');
      });
  }, []);

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div>
      <BtnGoBack type="button" onClick={handleGoBack}>
        <BiArrowBack size="1.5em" />
        Go back
      </BtnGoBack>
      {status === 'pending' && <Loader />}
      {status !== 'rejected' && <UsersList users={users} />}
      {status === 'rejected' && <Error error={error.message} />}
    </div>
  );
}

export default Tweets;
