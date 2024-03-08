import Link from 'next/link';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Homepage!</h1>
      <button>
        <Link href="/login">Login</Link>
      </button>
    </div>
  );
};

export default HomePage;