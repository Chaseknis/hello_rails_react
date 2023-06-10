import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting } from '../redux/actions'; // Remove the file extension

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return (
    <div>
      <h1>Random Greeting</h1>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;
