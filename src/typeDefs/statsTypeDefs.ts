import { gql } from 'apollo-server-express';

const baseStatsTypeDefs = `
    """
    The total confirmed cases of COVID19 infection
    """
    totalConfirmedCases: Int!

    """
    The net total confirmed cases of COVID19 infection of the past day. It equals to (total confirmed case - total death toll - total recovered cases)
    """
    netTotalConfirmedCases: Int!

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
  COVID19 Statistics of Australia
  """
  type AUStats{
    ${statsTypeDefs}

    """
    COVID19 Statistics of Australian Capital Territory
    """
    AustralianCapitalTerritory: Stats!

    """
    COVID19 Statistics of New South Wales
    """
    NewSouthWales: Stats!

    """
    COVID19 Statistics of Northern Territory
    """
    NothernTerritory: Stats!

    """
    COVID19 Statistics of Queensland
    """
    Queensland: Stats!

    """
    COVID19 Statistics of South Australia
    """
    SouthAustralia: Stats!

    """
    COVID19 Statistics of Tasmania
    """
    Tasmania: Stats!

    """
    COVID19 Statistics of Victoria
    """
    Victoria: Stats!

    """
    COVID19 Statistics of Western Australia
    """
    WesternAustralia: Stats!
  }

  type GlobalStats{
    ${statsTypeDefs}

    """
    COVID19 Statistics of Australia
    """
    Australia: AUStats!

    """
    COVID19 Statistics of China
    """
    China: Stats!

    """
    COVID19 Statistics of Italy
    """
    Italy: Stats!

    """
    COVID19 Statistics of Japan
    """
    Japan: Stats!

    """
    COVID19 Statistics of South Korea
    """
    SouthKorea: Stats!

    """
    COVID19 Statistics of United States
    """
    US: Stats!

    """
    COVID19 Statistics of United Kingdom
    """
    UK: Stats!

    """
    COVID19 Statistics of France
    """
    France: Stats!

    """
    COVID19 Statistics of Germany
    """
    Germany: Stats!

    """
    COVID19 Statistics of Spain
    """
    Spain: Stats!
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
