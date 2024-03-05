import { LargeNumberLike } from 'crypto';
import React from 'react';

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    // when using fetch, it will take from cache data
    // cache: 'no-store', // need fresh data, disable caching
    // next: { revalidate: 10 }, // fresh data for a certain period of time
  });
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>{' '}
      {/* Dynamic Rendering only on build time, when it gets to a website it switches to Static Rendering */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
