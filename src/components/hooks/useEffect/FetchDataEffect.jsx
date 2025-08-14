// 3

import { useState, useEffect } from "react";

const FetchDataEffect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const posts = await response.json();
      if (Array.isArray(posts)) {
        setData(posts);
      }
    }

    getData();
  }, []);

  return (
    <>
      <div>
        <ol>
          {data.map((post) => (
            <li key={post.id}>Title -- {post.title}</li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default FetchDataEffect;
