import React from 'react';
import { getAuth, signOut } from 'firebase/auth';

const Home = () => {
  const auth = getAuth();

  return (
    <div>
      <p>Home Page (Protected by Firebase!)</p>
      <button onClick={() => signOut(auth)}>Sign out of Firebase</button>
    </div>
  );
};

export default Home;
