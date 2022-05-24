import React from 'react';
import UserIcons from '../Commons/Icons';
import {
  FaHome,
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
  FaSearch,
  FaTimes,
} from 'react-icons/fa';
import { USER_PER_PAGE } from '../../../src/Utils/Constants';
import Input from '../Commons/Input';
import './User.css';
import Pagination from '../../Components/Pagination/Pagination';

const UserItems = ({
  items,
  currentPage,
  isLoading,
  totalPages,
  handleClick,
}) => {
  console.log(USER_PER_PAGE, 'my ONE users items logged here');

  const startIndex = (currentPage - 1) * USER_PER_PAGE;
  const selectedUsers = items?.items?.slice(
    startIndex,
    startIndex + USER_PER_PAGE
  );

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div className='container mt-3'>
      <div className='navbar'>
        <div className='header'>
          <h1 className='h1-text'>Trending Repos</h1>
        </div>
        <div className='nav-contents'>
          <div className='icons-container'>
            <UserIcons icons={FaRegArrowAltCircleLeft} className='fa-chevro' />
            <UserIcons icons={FaRegArrowAltCircleRight} className='fa-chevro' />
            <UserIcons icons={FaTimes} className='fa-chevro' />
            <UserIcons icons={FaHome} className='fa-chevro' />
          </div>

          <div className='input-container'>
            <Input className='trend-input' />
            <button className='btn-search'>
              <UserIcons icons={FaSearch} className='fa-chevr' />
            </button>
          </div>
        </div>
      </div>

      <div className='items-container'>
        {selectedUsers.map((item) => (
          <div className='main-container' key={item.id}>
            <div className='profile-repo'>
              <div className='repo-image'>
                <img
                  src={item.owner.avatar_url}
                  style={{ height: '100px', width: '100px' }}
                  alt={item.owner.name}
                />
              </div>

              <div className='repo-details'>
                <div className='rep-content'>
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}
                  >
                    <h1 style={{ fontSize: '24px' }}>{item.full_name}</h1>
                  </div>

                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}
                  >
                    <p style={{ fontSize: '16px' }}>
                      An open Source Machine Learning framework for everyone
                      <span> {item.url}</span>
                    </p>
                  </div>
                </div>

                <div className='rate'>
                  <div className='rate-1'>Stars: {item.stargazers_count}k</div>
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
      </div>

      <div className='footer'>
        <Pagination totalPages={totalPages} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default UserItems;
