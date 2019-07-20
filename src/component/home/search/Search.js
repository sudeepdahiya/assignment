import React from 'react';
import PropTypes from 'prop-types';

import './search.scss';

class Search extends React.Component {
  state = { value: '', showList: false };

  /**
   * @description get drop down list from parent component by search
   */
  getList = e => {
    const { onChange } = this.props;
    onChange(e.target.value);
    this.changeInput(e.target.value);
  };

  /**
   * @description change value of auto complete
   */
  changeInput = value => {
    this.setState({ value });
  };

  /**
   * @description show and hide list
   */
  toggleList = showList => {
    this.setState({ showList });
  };

  /**
   * @description return font size according to population
   */
  getPopulationWiseFont = population => {
    const numberReg = /^[0-9]+$/;
    if (numberReg.test(population)) {
      return 12 + 3 * population.length;
    }
    return 12;
  };

  render() {
    const { list, loader, onSelect, disabled } = this.props;
    const { value, showList } = this.state;
    return (
      <div className="col-sm-12 autocomplete">
        {loader && <span className="loader" />}
        <input
          type="search"
          className="form-control mdb-autocomplete"
          onChange={this.getList}
          value={value}
          onFocus={() => this.toggleList(true)}
          placeholder="search"
          disabled={disabled}
        />
        {!loader && showList && list.length > 0 && (
          <div className="searchBox">
            {list.map(row => (
              <div
                onClick={() => {
                  this.changeInput(row.name);
                  this.toggleList(false);
                  onSelect(row);
                }}
                style={{
                  fontSize: this.getPopulationWiseFont(row.population)
                }}
                key={row.name}
              >
                {row.name}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

Search.defaultProps = {
  list: [],
  loader: false
};

Search.propTypes = {
  list: PropTypes.shape({}),
  loader: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default Search;
