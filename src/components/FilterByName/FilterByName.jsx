import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from './FilterByName.styled';

function FilterByName({ onFilterByName }) {
  const [filter, setFilter] = useState('');

  const handleFilter = event => {
    setFilter(event.target.value);
  };
  return (
    <Label>
      Filter by name:
      <Input type="text" value={filter} onChange={handleFilter} />
      {/* <Input type="text" value={filter} onChange={handleFilter} /> */}
    </Label>
  );
}

// FilterByName.propTypes = {
//   filter: PropTypes.string.isRequired,
//   onFilterByNameChange: PropTypes.func.isRequired,
// };
export default FilterByName;
