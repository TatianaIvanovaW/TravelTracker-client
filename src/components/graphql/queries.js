import gql from "graphql-tag";

export const GET_ALL_COUNTRIES = gql`
  query AllCountryUsers {
    countryUsers {
      code
      users {
        id
      }
    }
  }
`; /* // <<for all countries with array of users
//(for main map, to get a number of visits to each country) */

export const ALL_COUNTRIES = gql`
  query GetCountries {
    countries {
      id
      name
      code
    }
  }
`; // << for all countries
