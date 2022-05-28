import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Button from '../Commons/Button';
import Input from '../Commons/Input';
import './User.css';
import CircularProgress from '@mui/material/CircularProgress';

const UserItems = ({ githubResponse, currentPage, isLoading, loadMore }) => {
  const onNext = () => {
    loadMore?.();
  };

  return isLoading ? (
    <CircularProgress />
  ) : (
    <div className='container mt-3'>
      <div className='input-container'>
        <Input className='em-input' placeholder='Search....' />
        <Button className='input-button' title='Search' />
      </div>

      <div className='items-container'>
        <InfiniteScroll
          dataLength={githubResponse?.items}
          next={onNext}
          hasMore={githubResponse?.incomplete_results}
          loader={<CircularProgress />}
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
                    <h1 className='repo-1'>{item.full_name}</h1>
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
                        Submiitted 30 days ago by {item.name}
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
