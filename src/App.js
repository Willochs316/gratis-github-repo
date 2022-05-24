import React, { useEffect, useState } from 'react';
import UserItems from './Components/Users/UserItems';
import axios from 'axios';
import { USER_PER_PAGE } from './Utils/Constants';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  console.log(totalPages, 'pagessss 101');
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://api.github.com/search/repositories?q=created:%3E2021-08-13&sort=stars&order=desc/github`
      );

      console.log(result.data, 'data logged');
      setItems(result.data);
      setIsLoading(false);

      setTotalPages(Math.ceil(result.data.items.length / USER_PER_PAGE));
    };
    fetchItems();
  }, []);

  const handleClick = (num) => {
    setCurrentPage(num);
  };

  return (
    <UserItems
      isLoading={isLoading}
      items={items}
      currentPage={currentPage}
      totalPages={totalPages}
      handleClick={handleClick}
    />
  );
};

export default App;
