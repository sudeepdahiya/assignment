import React from 'react';
import PropTypes from 'prop-types';

const Detail = props => {
  const displayFields = [
    { title: 'Name', value: 'name' },
    { title: 'Rotation Period', value: 'rotation_period' },
    { title: 'Orbital Period', value: 'orbital_period' },
    { title: 'Climate', value: 'climate' },
    { title: 'Gravity', value: 'gravity' },
    { title: 'Population', value: 'population' },
    { title: 'Surface Water', value: 'surface_water' }
  ];
  return (
    <React.Fragment>
      <h3>Planet Detail</h3>
      {displayFields.map(field => (
        <div key={field.title} className="row">
          <div className="col-sm-4">
            <span>{field.title}</span>
          </div>
          <div className="col-sm-4">
            <span>{props[field.value] || '-'}</span>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

Detail.defaultProps = {
  name: '-',
  rotation_period: '-',
  orbital_period: '-',
  climate: '-',
  gravity: '-',
  population: '-',
  surface_water: '-'
};

Detail.propTypes = {
  name: PropTypes.string,
  rotation_period: PropTypes.string,
  orbital_period: PropTypes.string,
  climate: PropTypes.string,
  gravity: PropTypes.string,
  population: PropTypes.string,
  surface_water: PropTypes.string
};

export default Detail;
