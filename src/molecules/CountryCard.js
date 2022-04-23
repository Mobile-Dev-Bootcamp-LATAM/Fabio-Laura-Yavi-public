import { useContext, useEffect } from "react";
import styled from "styled-components";
import { Flag } from "../atoms/Flag";
import context from "../context/context";
import * as actionTypes from "../context/actionTypes";
import { useNavigate } from "react-router-dom";

const CountryCtn = styled.div`
  padding: 1rem;
  display: flex;
  gap: 1rem;
  border: 0.125rem solid black;
  border-radius: 5px;

  :hover {
    cursor: pointer;
  }
`;

const CountryCard = ({ country }) => {
  const reducer = useContext(context);
  const { state, dispatch } = reducer;

  let navigate = useNavigate();

  const handleCardClick = (clickedCountry) => {
    return () => {
      console.log("clicked!");
      console.log({ clickedCountry });
      dispatch({
        type: actionTypes.SELECT_COUNTRY,
        payload: clickedCountry,
      });
    };
  };

  useEffect(() => {
    state.selectedCountry && navigate(`/detail`);
  }, [state.selectedCountry]);

  return (
    <CountryCtn onClick={handleCardClick(country)}>
      <Flag size={3} src={country.flags.png} />
      <div>
        <div>{country.name}</div>
        <div>{country.capital}</div>
      </div>
    </CountryCtn>
  );
};

export { CountryCard };
