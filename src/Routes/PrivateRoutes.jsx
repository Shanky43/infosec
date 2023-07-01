import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
  const [isAuth] = useState(() => {
    const authentication = JSON.parse(localStorage.getItem('isAuth'));
    return authentication || false;
  });

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoutes;
