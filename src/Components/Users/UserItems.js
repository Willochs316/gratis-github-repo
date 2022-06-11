import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './User.css';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';
import SearchBar from '../SearchBar/SearchBar';

const UserItems = ({ githubResponse, currentPage, isLoading, loadMore }) => {
  const onNext = () => {
    loadMore?.();
  };

  return isLoading ? (
    <Box className='progressBar'>
      <CircularProgress />
    </Box>
  ) : (
    <div className='container mt-3'>
      <SearchBar githubResponse={githubResponse} />

      <div className='items-container'>
        <InfiniteScroll
          dataLength={githubResponse?.items}
          next={onNext}
          hasMore={githubResponse?.incomplete_results}
          loader={
            <Box className='progressBar'>
              <CircularProgress />
            </Box>
          }
        >
          {githubResponse?.items?.map((item) => (
            <div className='main-container' key={item.id}>
              <div className='profile-repo'>
                <div className='repo-image-container'>
                  <img
                    src={item.owner.avatar_url}
                    className='repo-image'
                    alt={item.owner.name}
                  />
                </div>

                <div className='repo-details'>
                  <div className='repo-header'>
                    <h2 className='repo-1'>{item.full_name}</h2>
                  </div>

                  <div className='repo-text'>
                    <p className='repo-p1'>
                      {item.description}
                      <span> {item.url}</span>
                    </p>
                  </div>

                  <div className='rate'>
                    <div className='rate-1'>
                      Stars: {item.stargazers_count}k
                    </div>

                    <div className='rate-2'>
                      Issues: {item.open_issues_count}k
                    </div>

                    <div className='rate-text-content'>
                      <span className='rate-text'>
                        Submitted 30 days ago by {item.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default UserItems;
