import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonWrapper = styled.button`
  background-color: #d32323;
  position: relative;
  bottom: 28px;
  width: 290px;
  height: 30px;
  padding: 5px 24px 5px 30px;
  margin-top: 3px;
  border-radius: 3px;
  border: 1px solid #d32323;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  color: white;
  font-weight: 700;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  transition: 0.6s;
  :hover {
    opacity: 0.8;
  }
`;

const ReserveButton = ({ postReservation }) => (
  <ButtonWrapper onClick={postReservation}>Find a Table</ButtonWrapper>
);

ReserveButton.propTypes = {
  postReservation: PropTypes.func,
};

ReserveButton.defaultProps = {
  postReservation: () => {},
};

export default ReserveButton;
