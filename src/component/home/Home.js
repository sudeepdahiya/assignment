import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Search from './search/Search';
import Detail from './detail/Detail';
import Error from './../error/Error';
import { getMinutesBetweenDates } from './../../utils/function';

import homeAction from './../../action/home/homeAction';

import {
  USER_SEARCH_PERMISSION,
  LIMIT_PER_MIN
} from './../../constant/constant';

import './home.scss';

const Home = props => {
  const dispatch = useDispatch();
  const [renderValue, rerender] = useState(true);

  const {
    searchList,
    loader,
    error,
    selectedItem,
    searchCounter,
    username
  } = useSelector(({ home, auth }) => {
    return {
      searchList: home.searchList,
      loader: home.loader,
      error: home.error,
      selectedItem: home.selectedItem,
      searchCounter: home.searchCounter,
      username: auth.username
    };
  });
  /**
   * @description when search is disable then recheck the excceed limit after some time
   */
  const enableSearchDisble = () => {
    setTimeout(() => {
      rerender(!renderValue);
    }, 1000 * 5);
  };

  // check valid user for search
  let searchError = null;
  if (true || USER_SEARCH_PERMISSION.indexOf(username) === -1) {
    let searchCount = 0;
    for (let i = 0; i < searchCounter.length; i++) {
      const timeDiff = getMinutesBetweenDates(searchCounter[i], new Date());
      if (timeDiff < 1) {
        searchCount++;
      }
    }
    console.log('searchCount', searchCount);
    // set error if limit exceed
    if (searchCount >= LIMIT_PER_MIN) {
      searchError = 'Number of search exceed';
      enableSearchDisble();
    }
  }
  return (
    <div className="container box">
      <div className="row">
        {error && <Error error={error} />}
        {searchError && <Error error={searchError} />}
        <div className="col-sm-4">
          <h3>Search Planet</h3>
          <Search
            onChange={a => {
              dispatch(homeAction.getSearchList(a));
            }}
            list={searchList}
            loader={loader}
            onSelect={item => dispatch(homeAction.setSelectedItem(item))}
            disabled={searchError ? true : false}
          />
        </div>
        <div className="col-sm-8">
          <Detail {...selectedItem} />
        </div>
      </div>
    </div>
  );
};

export default Home;
