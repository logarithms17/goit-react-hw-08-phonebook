import css from './Filter.module.css';
import PropTypes from 'prop-types';

function Filter({ filter, updateFilter }) {
  console.log(filter);

  const handleFilter = e => {
    updateFilter(e.target.value);
  };
  return (
    <div>
      <h1>Contacts</h1>
      <label htmlFor="filter" className={css.filterLabel}>
        Find contacts by name
      </label>
      <input type="text" onChange={handleFilter} id="filter" value={filter} />
    </div>
  );
}

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  updateFilter: PropTypes.func.isRequired,
};
