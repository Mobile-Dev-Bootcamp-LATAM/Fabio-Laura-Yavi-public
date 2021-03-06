import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Flag } from "../atoms/Flag";
import { Title } from "../atoms/Title";
import context from "../context/context";
import { CurrencyConverter } from "../molecules/CurrencyConverter";

const getLat = (latlng) => {
  return latlng.length >= 1 ? latlng[0] : "Not specified";
};

const getLng = (latlng) => {
  return latlng.length >= 2 ? latlng[1] : "Not specified";
};

const getLanguage = (languages) => {
  return languages.length > 0 ? languages[0].name : "Not specified";
};

const getCurrency = (currencies) => {
  return currencies.length > 0
    ? `${currencies[0].code} ${currencies[0].symbol}`
    : "Not specified";
};

const Details = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  label {
    font-weight: bold;
  }
`;

const DetailsCtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const InnerCtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 1rem 1rem 5rem 1rem;
`;

const CountryDetailView = () => {
  const reducer = useContext(context);
  const { state, dispatch } = reducer;
  const { selectedCountry, currentCountry } = state;

  return (
    <div>
      <DetailsCtn>
        <Title>{selectedCountry.name}</Title>
        <InnerCtn>
          <Flag src={selectedCountry.flags.png} size={5} />
          <Details>
            <label>Capital</label>
            <span>{selectedCountry.capital}</span>
            <label>Population</label>
            <span>{selectedCountry.population}</span>
            <label>Language</label>
            <span>{getLanguage(selectedCountry.languages)}</span>
            <label>Area</label>
            <span>{selectedCountry.area}</span>
            <label>Lat</label>
            <span>{getLat(selectedCountry.latlng)}</span>
            <label>Long</label>
            <span>{getLng(selectedCountry.latlng)}</span>
            <label>Currency</label>
            <span>{getCurrency(selectedCountry.currencies)}</span>
          </Details>
          <CurrencyConverter
            countryA={currentCountry}
            countryB={selectedCountry}
          />
        </InnerCtn>
      </DetailsCtn>
    </div>
  );
};

export { CountryDetailView };
