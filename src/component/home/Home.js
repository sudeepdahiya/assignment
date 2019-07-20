import React from 'react';
import PropTypes from 'prop-types';

import Search from './search/Search';
import Detail from './detail/Detail';
import Error from './../error/Error';
import { getMinutesBetweenDates } from './../../utils/function';

import {
  USER_SEARCH_PERMISSION,
  LIMIT_PER_MIN
} from './../../constant/constant';

import './home.scss';

class Home extends React.Component {
  /**
   * @description when search is disable then recheck the excceed limit after some time
   */
  enableSearchDisble = () => {
    setTimeout(() => {
      this.forceUpdate();
    }, 1000 * 5);
  };

  render() {
    const {
      searchList,
      getSearchList,
      loader,
      setSelectedItem,
      selectedItem,
      error,
      searchCounter,
      username
    } = this.props;
    // check valid user for search
    let searchError = null;
    if (USER_SEARCH_PERMISSION.indexOf(username) === -1) {
      let searchCount = 0;
      for (let i = 0; i < searchCounter.length; i++) {
        const timeDiff = getMinutesBetweenDates(searchCounter[i], new Date());
        if (timeDiff < 1) {
          searchCount++;
        }
      }
      // set error if limit exceed
      if (searchCount > LIMIT_PER_MIN) {
        searchError = 'Number of search exceed';
        this.enableSearchDisble();
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
                getSearchList(a);
              }}
              list={searchList}
              loader={loader}
              onSelect={item => setSelectedItem(item)}
              disabled={searchError ? true : false}
            />
          </div>
          <div className="col-sm-8">
            <Detail {...selectedItem} />
          </div>
        </div>
      </div>
    );
  }
}

Home.defaultProps = {
  error: '',
  searchList: []
};

Home.propTypes = {
  searchList: PropTypes.array.isRequired,
  getSearchList: PropTypes.func,
  loader: PropTypes.bool.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
  selectedItem: PropTypes.object.isRequired,
  error: PropTypes.string,
  searchCounter: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired
};

export default Home;
