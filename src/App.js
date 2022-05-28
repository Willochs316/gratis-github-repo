import React, { useEffect, useState } from 'react';
import UserItems from './Components/Users/UserItems';
import axios from 'axios';

const App = () => {
  const [githubResponse, setGithubResponse] = useState({
    total_count: 0,
    items: [],
    incomplete_results: false,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchItems = async () => {
      currentPage === 1 && setIsLoading(true);
      const { data } = await axios(
        `https://api.github.com/search/repositories?q=created:%3E2021-08-13&sort=stars&order=desc/github&page=${currentPage}`
      );
      setGithubResponse((prev) => ({
        ...prev,
        ...data,
      }));
      currentPage === 1 && setIsLoading(false);
    };
    fetchItems();
  }, [currentPage]);

  const loadMore = () => {
    githubResponse.incomplete_results && setCurrentPage((prev) => (prev += 1));
  };

  return (
    <UserItems
      isLoading={isLoading}
      githubResponse={githubResponse}
      currentPage={currentPage}
      totalPages={totalPages}
      loadMore={loadMore}
    />
  );
};

export default App;
