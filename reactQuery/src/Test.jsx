// import React from "react";
// import { useQuery } from "react-query";

// const Test1 = () => {
//   const { isLoading, data, error } = useQuery("githubData", () =>
//     fetch("https://api.github.com/repos/MadhanMech/ReactLearning").then(
//       (res) => res.json()
//     )
//   );

//   if (isLoading) {
//     return <h1>Loading...</h1>;
//   }

//   if (error) {
//     return <h1>An error occurred: {error.message}</h1>;
//   }

//   console.log(data);

//   return (
//     <div>
//       <h2>Repository Name: {data?.name}</h2>
//         <h3>Owner: {data?.owner?.login}</h3>    
// <h3>Repo forks: {data. forks}</h3>
// <h3>Repo stars: {data. stargazers_count}</h3>
// <h3>Repo s {data.subscribers_count}</h3>


//       <p>Description: {data?.description}</p>
//     </div>
//   );
// };

// export default Test1;















//useQuery will run only depend key change again key with same input useQuery will not run again

import React, { useState } from "react";
import { useQuery } from "react-query";

const apiCall = ({ queryKey }) => {
  const url = queryKey[1];
  return fetch(url).then((res) => res.json());
};

const Test1 = () => {
  const [url, setUrl] = useState("");
  const [url2, setUrl2] = useState("");

  const repo1 = useQuery(["githubData", url], apiCall, {
    enabled: !!url,
  });

  const repo2 = useQuery(["githubData2", url2], apiCall, {
    enabled: !!url2,
  });

  return (
    <div>
      <button
        onClick={() =>
          setUrl("https://api.github.com/repos/MadhanMech/ReactLearning")
        }
      >
        Load Repo 1
      </button>

      <button
        onClick={() =>
          setUrl2("https://api.github.com/repos/MadhanMech/ReactLearning")
        }
      >
        Load Repo 2
      </button>

      {repo1.isLoading && <p>Loading Repo 1...</p>}
      {repo1.error && <p>Error loading Repo 1: {repo1.error.message}</p>}

      {repo1.data && (
        <div>
          <h1>Repo 1 Name: {repo1.data.name}</h1>
          <h3>Forks: {repo1.data.forks}</h3>
          <h3>Stars: {repo1.data.stargazers_count}</h3>
          <h3>Subscribers: {repo1.data.subscribers_count}</h3>
        </div>
      )}

      {repo2.isLoading && <p>Loading Repo 2...</p>}
      {repo2.error && <p>Error loading Repo 2: {repo2.error.message}</p>}

      {repo2.data && (
        <div>
          <h1>Repo 2 Name: {repo2.data.name}</h1>
          <h3>Forks: {repo2.data.forks}</h3>
          <h3>Stars: {repo2.data.stargazers_count}</h3>
          <h3>Subscribers: {repo2.data.subscribers_count}</h3>
        </div>
      )}
    </div>
  );
};

export default Test1;
