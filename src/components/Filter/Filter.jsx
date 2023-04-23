import React, { useState, useEffect } from 'react';

function Filter({ onFilterChange }) {
  const [filter, setFilter] = useState('show all');

  useEffect(() => {
    onFilterChange(filter);
  }, [filter, onFilterChange]);

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <label>
        Filter:
        <select value={filter} onChange={handleFilterChange}>
          <option value="show all">Show all</option>
          <option value="follow">Follow</option>
          <option value="following">Following</option>
        </select>
      </label>
    </div>
  );
}

export default Filter;
