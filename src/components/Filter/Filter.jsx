import React from 'react';
import { Label, Select } from './Filter.styled';

function Filter({ filter, onFilterChange }) {
  return (
    <Label>
      Filter by status:
      <Select value={filter} onChange={onFilterChange}>
        <option value="show all">Show all</option>
        <option value="follow">Follow</option>
        <option value="following">Following</option>
      </Select>
    </Label>
  );
}

export default Filter;
