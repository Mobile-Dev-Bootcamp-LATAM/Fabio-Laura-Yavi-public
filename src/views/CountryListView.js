import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { More } from "../atoms/More";
import { Title } from "../atoms/Title";
import { CountryCard } from "../molecules/CountryCard";
import * as actionTypes from "../context/actionTypes";
import context from "../context/context";
import { SearchBar } from "../atoms/SearchBar";

const ViewCtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const ViewHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`;

const findByCountryCode = (countries, countryCode) => {
  for (let country of countries) {
    if (country.alpha2Code === countryCode) {
      return country;
    }
  }
  return null;
};

const CountryListView = () => {
//   const [countries, setCountries] = useState([]);
  const reducer = useContext(context);
  const { state, dispatch } = reducer;
  const { countries, filterBy } = state;

  const filterdCountries = countries.filter(c => {
      return c.name.toLowerCase().includes(filterBy.toLowerCase());
  })

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://restcountries.com/v2/lang/es`);
      const json = await response.json();
      dispatch({
          type: actionTypes.SET_COUNTRIES,
          payload: json
      })
    //   setCountries(json);
    })();
  }, []);

  useEffect(() => {
    if (countries.length > 0) {
      (async () => {
        const response = await fetch(`https://ip-api.io/json/`);
        const json = await response.json();
        const countryCode = json.country_code;
        const foundCountry = findByCountryCode(countries, countryCode);
        dispatch({
          type: actionTypes.SET_CURRENT_COUNTRY,
          payload: foundCountry,
        });
      })();
    }
  }, [countries]);

  return (
    <ViewCtn>
      <ViewHeader>
        <Title>Countries</Title>
        <More />
      </ViewHeader>
      <SearchBar/>
      <List>
        {filterdCountries.map((country) => {
          return <CountryCard key={country.numericCode} country={country} />;
        })}
      </List>
    </ViewCtn>
  );
};

export { CountryListView };
