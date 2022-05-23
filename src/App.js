import React, { useEffect, useState } from 'react';
import UserItems from './Components/Users/UserItems';
import axios from 'axios';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://api.github.com/search/repositories?q=created:%3E2021-08-13&sort=stars&order=desc/github`
      );

      console.log(result.data, 'data logged');
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);
  return <UserItems isLoading={isLoading} items={items} />;
};

export default App;
