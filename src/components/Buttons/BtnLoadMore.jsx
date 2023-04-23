import PropTypes from 'prop-types';
import { BtnLoadMoreStyled } from './Buttons.styled';

export function BtnLoadMore({ onLoadMore }) {
  return (
    <BtnLoadMoreStyled type="button" onClick={() => onLoadMore()}>
      Load more
    </BtnLoadMoreStyled>
  );
}

BtnLoadMore.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
