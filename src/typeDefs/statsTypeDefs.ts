import { gql } from 'apollo-server-express';

import { default as countries } from '../config/countries.json';

const baseStatsTypeDefs = `
    """
    The total confirmed cases of COVID19 infection
    """
    totalConfirmedCases: Int!

    """
    The net total confirmed cases of COVID19 infection of the past day. It equals to (total confirmed case - total death toll - total recovered cases)
    """
    currentConfirmedCases: Int!

    """
    The newly confirmed cases of COVID19 infection of the past day
    """
    newlyConfirmedCases: Int!

    """
    The net newly confirmed cases of COVID19 infection of the past day. It equals to (total newly confirmed case - new death toll - newly recovered cases)
    """
    netNewlyConfirmedCases: Int!

    """
    The total death toll caused by COVID19 infection
    """
    totalDeaths: Int!

    """
    The death toll caused by COVID19 infection of the past day
    """
    newDeaths: Int!

    """
    The total number of recovered cases from COVID19 infection
    """
    totalRecoveredCases: Int!

    """
    The number of newly recovered cases from COVID19 infection of the past day
    """
    newlyRecoveredCases: Int!

    """
    The date and time the data was last updated at John Hopkins University
    """
    lastUpdatedDate: String!
`;

const statsTypeDefs = `

    ${baseStatsTypeDefs}

    """
    The past COVID19 infection statistics
    """
    history: [History]!
`;

const australiaStatsTypeDefs = `
  ${Object.entries(countries.Australia.states)
    .map(
      ([stateName, state]) => `
    """
    COVID19 Statistics in ${stateName}
    """
    ${state.code} : Stats!`,
    )
    .join('\r\n')}
`;

const canadaStatsTypeDefs = `
  ${Object.entries(countries.Canada.states)
    .map(
      ([stateName, state]) => `
    """
    COVID19 Statistics in ${stateName}
    """
    ${state.code} : Stats!`,
    )
    .join('\r\n')}
`;

const usStatsTypeDefs = `
  ${Object.entries(countries.US.states)
    .map(
      ([stateName, state]) => `
    """
    COVID19 Statistics in ${stateName}
    """
    ${state.code} : Stats!`,
    )
    .join('\r\n')}
`;

const chinaStatsTypeDefs = `
  ${Object.entries(countries.China.states)
    .map(
      ([stateName, state]) => `
    """
    COVID19 Statistics in ${stateName}
    """
    ${state.code} : Stats!`,
    )
    .join('\r\n')}
`;

const countriesStatsTypeDefs = `
  ${Object.entries(countries)
    .map(([countryName, country]) => {
      if (country.code === 'Global') {
        return '';
      }
      if (['Australia', 'US', 'Canada', 'China'].find((drillDownCountry) => drillDownCountry === country.code)) {
        return `
        """
        COVID19 Statistics in ${countryName}
        """
        ${country.code}: ${country.code}Stats!`;
      } else {
        return `
        """
        COVID19 Statistics in ${countryName}
        """
        ${country.code}: Stats!`;
      }
    })
    .join('\r\n')}
`;

export const typeDefs = gql`
  """
  COVID19 Statistics of a generic region, for instance NSW, VIC or QLD
  """
  type Stats {
    ${statsTypeDefs}
  }

  """
  COVID19 infection statistics of a past day
  """
  type History {
    ${baseStatsTypeDefs}
  }

  """
  COVID19 Statistics in Australia
  """
  type AustraliaStats{
    ${statsTypeDefs}

    ${australiaStatsTypeDefs}
  }

  """
  COVID19 Statistics in China
  """
  type ChinaStats{
    ${statsTypeDefs}

    ${chinaStatsTypeDefs}
  }


  """
  COVID19 Statistics in Canada
  """
  type CanadaStats{
    ${statsTypeDefs}

    ${canadaStatsTypeDefs}
  }

  """
  COVID19 Statistics in US
  """
  type USStats {
    ${statsTypeDefs}

    ${usStatsTypeDefs}
  }

  """
  COVID19 Statistics around the World
  """
  type GlobalStats{
    ${statsTypeDefs}

    ${countriesStatsTypeDefs}
  }

  """
  The schema’s entry-point for queries. This acts as the public, top-level API
  from which all queries must start.
  """
  type Query {
    """
    COVID19 Statistics of the World
    """
    global: GlobalStats!
  }
`;
