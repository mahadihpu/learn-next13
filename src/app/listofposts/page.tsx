import React from 'react';

import Image from "next/image"

const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
};

const getUserData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
  };
  const getDogData = async () => {
    const res = await fetch('https://dog.ceo/api/breeds/image/random', {
        cache: "no-store"
    });
    return res.json();
  };

export default async function Posts() {
  const [posts,users,dog] = await Promise.all([getPosts(), getUserData(),getDogData()]);

  console.log(posts);
  return (
    <div>
        <Image src={dog.message} alt="dog" width={300} height={300} />
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <hr />
      
      <ol>
      {users.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
    </div>
  );
}
