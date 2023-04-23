import PropTypes from 'prop-types';
import { BtnGoBackStyled } from './Buttons.styled';
import { BiArrowBack } from 'react-icons/bi';

export function BtnGoBack({ onGoBack }) {
  return (
    <BtnGoBackStyled type="button" onClick={() => onGoBack()}>
      <BiArrowBack size="1.5em" />
      Go back
    </BtnGoBackStyled>
  );
}

BtnGoBack.propTypes = {
  onGoBack: PropTypes.func.isRequired,
};
