import React, { useState, useEffect } from 'react';
import { Label, Select } from './Filter.styled';

function Filter({ onFilterChange }) {
  const [filter, setFilter] = useState('show all');

  useEffect(() => {
    onFilterChange(filter);
  }, [filter, onFilterChange]);

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  return (
    <Label>
      Filter by status:
      <Select value={filter} onChange={handleFilterChange}>
        <option value="show all">Show all</option>
        <option value="follow">Follow</option>
        <option value="following">Following</option>
      </Select>
    </Label>
  );
}

export default Filter;
