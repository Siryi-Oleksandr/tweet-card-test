import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from './FilterByName.styled';

function FilterByName({ onFilterByName }) {
  const [filter, setFilter] = useState('');

  useEffect(() => {
    onFilterByName(filter);
  }, [filter, onFilterByName]);

  const handleFilter = event => {
    setFilter(event.target.value);
  };
  return (
    <Label>
      Filter by name:
      <Input
        type="text"
        value={filter}
        placeholder="Kevin"
        onChange={handleFilter}
      />
    </Label>
  );
}

FilterByName.propTypes = {
  onFilterByName: PropTypes.func.isRequired,
};

export default FilterByName;
