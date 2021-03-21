import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from 'util/Actions/UserActions';

const useFetchUser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  const user = useSelector((state) => state.user);
  console.log('user', user);
  return user;
};

export default useFetchUser;
