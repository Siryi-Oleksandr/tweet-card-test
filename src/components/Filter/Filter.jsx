import React from 'react';
import PropTypes from 'prop-types';
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

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
