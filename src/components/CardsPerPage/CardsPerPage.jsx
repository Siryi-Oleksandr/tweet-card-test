import React from 'react';
import PropTypes from 'prop-types';
import { Label, Select } from './CardsPerPage.styled';

function CardsPerPage({ perPage, onPerPageChange }) {
  return (
    <Label>
      Upload cards to page:
      <Select value={perPage} onChange={onPerPageChange}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
      </Select>
    </Label>
  );
}

CardsPerPage.propTypes = {
  perPage: PropTypes.number.isRequired,
  onPerPageChange: PropTypes.func.isRequired,
};

export default CardsPerPage;
