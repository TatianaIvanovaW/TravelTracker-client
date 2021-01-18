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
`;

export const ALL_COUNTRIES = gql`
  query GetCountries {
    countries {
      name
      code
    }
  }
`;

//  const { data } = useQuery(gql`
//     query GetUser {
//       user(id: ${user.id}) {
//         countries {
//           name
//           code
//         }
//       }
//     }
//   `);
