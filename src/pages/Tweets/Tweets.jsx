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
import CardsPerPage from 'components/CardsPerPage';
import FilterByName from 'components/FilterByName/FilterByName';

function Tweets() {
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('show all');
  const [filterByName, setFilterByName] = useState('');
  const [cardsPerPage, setCardsPerPage] = useState(4);

  const navigate = useNavigate();

  useEffect(() => {
    setStatus('pending');
    const abortConroller = new AbortController();

    switch (filter) {
      case 'follow':
        API.getUsersFollow(filterByName, page, cardsPerPage, abortConroller)
          .then(data => {
            if (data?.length) {
              if (page === 1) {
                setUsers(data);

                // get all numbers of necessary users
                API.getAllFollowUsers()
                  .then(data => {
                    if (data?.length) {
                      setTotalPages(Math.ceil(data?.length / cardsPerPage));
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
              setUsers([]);
              setTotalPages(0);
              toast.success("Unfortunately we don't find any tweets!");
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
        API.getUsersFollowing(filterByName, page, cardsPerPage, abortConroller)
          .then(data => {
            if (data?.length) {
              if (page === 1) {
                setUsers(data);

                // get all numbers of users
                API.getAllFollowingUsers()
                  .then(data => {
                    if (data?.length) {
                      setTotalPages(Math.ceil(data?.length / cardsPerPage));
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
              setUsers([]);
              setTotalPages(0);
              toast.success("Unfortunately we don't find any tweets!");
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
        API.getUsers(filterByName, page, cardsPerPage, abortConroller)
          .then(data => {
            if (data?.length) {
              if (page === 1) {
                setUsers(data);

                // get all numbers of users
                API.getAllUsers(filterByName, abortConroller)
                  .then(data => {
                    if (data?.length) {
                      setTotalPages(Math.ceil(data?.length / cardsPerPage));
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
              setUsers([]);
              setTotalPages(0);
              toast.success("Unfortunately we don't find any tweets!");
              setStatus('resolved');
            }
          })
          .catch(error => {
            toast.error('Something went wrong 😥!');
            setError(error);
            setStatus('rejected');
          });
    }

    return () => {
      abortConroller.abort();
    };
  }, [cardsPerPage, filterByName, filter, page]);

  const handleGoBack = () => {
    navigate('/');
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleFilterChange = event => {
    setFilterByName('');
    setPage(1);
    setFilter(event.target.value);
  };

  const handleCardPerPage = event => {
    setPage(1);
    setCardsPerPage(Number(event.target.value));
  };

  const handleFilterByName = query => {
    setFilterByName(query);
  };

  const availablePages = totalPages > page;

  return (
    <div>
      <FilterSection>
        <BtnGoBack onGoBack={handleGoBack} />
        <CardsPerPage
          perPage={cardsPerPage}
          onPerPageChange={handleCardPerPage}
        />
        {filter === 'show all' && (
          <FilterByName onFilterByName={handleFilterByName} />
        )}

        <Filter filter={filter} onFilterChange={handleFilterChange} />
      </FilterSection>
      {status === 'pending' && <Loader />}
      {status !== 'rejected' && <UsersList users={users} />}
      {status === 'rejected' && <Error error={error.message} />}
      {availablePages && <BtnLoadMore onLoadMore={loadMore} />}
    </div>
  );
}

export default Tweets;
