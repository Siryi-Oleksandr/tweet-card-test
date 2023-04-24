import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as API from '../../services/api';
import Loader from 'components/Loader/Loader';
import UsersList from 'components/UsersList/UsersList';
import Error from 'components/Error';
import toast from 'react-hot-toast';
import { BtnLoadMore } from 'components/Buttons/BtnLoadMore';
import { BtnGoBack } from 'components/Buttons/BtnGoBack';
import Filter from 'components/Filter/Filter';
import { FilterSection } from './Tweets.styled';

const perPage = 4;

function Tweets() {
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('show all');

  const navigate = useNavigate();

  // useEffect(() => {
  //   API.getUsersFollowing().then(data => {
  //     if (data?.length) {
  //       console.log('super following users', data);
  //     }
  //   });
  // }, []);

  useEffect(() => {
    // get all numbers of users
    API.getAllUsers()
      .then(data => {
        if (data?.length) {
          setTotalPages(Math.ceil(data?.length / perPage));
        }
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  useEffect(() => {
    setStatus('pending');

    switch (filter) {
      case 'follow':
        API.getUsersFollow(page)
          .then(data => {
            if (data?.length) {
              if (page === 1) {
                setUsers(data);

                // get all numbers of necessary users
                API.getAllFollowUsers()
                  .then(data => {
                    if (data?.length) {
                      setTotalPages(Math.ceil(data?.length / perPage));
                    }
                  })
                  .catch(error => {
                    setError(error);
                  });

                setStatus('resolved');
              } else {
                setUsers(prev => [...prev, ...data]);
                setStatus('resolved');
              }
            }
            if (data?.length === 0) {
              setUsers(prev => prev);
              toast.success("Unfortunately you don't have any tweets yet!");
              setStatus('resolved');
            }
          })
          .catch(error => {
            toast.error('Something went wrong 😥!');
            setError(error);
            setStatus('rejected');
          });
        break;

      case 'following':
        API.getUsersFollowing(page)
          .then(data => {
            if (data?.length) {
              if (page === 1) {
                setUsers(data);

                // get all numbers of users
                API.getAllFollowingUsers()
                  .then(data => {
                    if (data?.length) {
                      setTotalPages(Math.ceil(data?.length / perPage));
                    }
                  })
                  .catch(error => {
                    setError(error);
                  });

                setStatus('resolved');
              } else {
                setUsers(prev => [...prev, ...data]);
                setStatus('resolved');
              }
            }
            if (data?.length === 0) {
              setUsers(prev => prev);
              toast.success("Unfortunately you don't have any tweets yet!");
              setStatus('resolved');
            }
          })
          .catch(error => {
            toast.error('Something went wrong 😥!');
            setError(error);
            setStatus('rejected');
          });
        break;

      default:
        API.getUsers(page)
          .then(data => {
            if (data?.length) {
              if (page === 1) {
                setUsers(data);

                // get all numbers of users
                API.getAllUsers()
                  .then(data => {
                    if (data?.length) {
                      setTotalPages(Math.ceil(data?.length / perPage));
                    }
                  })
                  .catch(error => {
                    setError(error);
                  });

                setStatus('resolved');
              } else {
                setUsers(prev => [...prev, ...data]);
                setStatus('resolved');
              }
            }
            if (data?.length === 0) {
              setUsers(prev => prev);
              toast.success("Unfortunately you don't have any tweets yet!");
              setStatus('resolved');
            }
          })
          .catch(error => {
            toast.error('Something went wrong 😥!');
            setError(error);
            setStatus('rejected');
          });
    }
  }, [filter, page]);

  const handleGoBack = () => {
    navigate('/');
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleFilterChange = filterState => {
    // setUsers([]);
    setPage(1);
    setFilter(filterState);
  };

  const availablePages = totalPages > page;

  return (
    <div>
      <FilterSection>
        <BtnGoBack onGoBack={handleGoBack} />
        <Filter onFilterChange={handleFilterChange} />
      </FilterSection>
      {status === 'pending' && <Loader />}
      {status !== 'rejected' && <UsersList users={users} />}
      {status === 'rejected' && <Error error={error.message} />}
      {availablePages && <BtnLoadMore onLoadMore={loadMore} />}
    </div>
  );
}

export default Tweets;
