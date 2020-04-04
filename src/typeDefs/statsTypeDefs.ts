import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  """
  COVID19 Statistics of a generic region, for instance NSW, VIC or QLD
  """
  type Stats {
    """
    The total confirmed cases of COVID19 infection
    """
    totalConfirmedCases: Int!

    """
    The newly confirmed cases of COVID19 infection of the past day
    """
    newlyConfirmedCases: Int!

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

    """
    The past COVID19 infection statistics
    """
    history: [History]!
  }

  """
  COVID19 infection statistics of a past day
  """
  type History {
    """
    The date of the statistics is for
    """
    date: String!

    """
    The date and time the data was last updated at John Hopkins University
    """
    lastUpdatedDate: String!

    """
    The total confirmed cases of COVID19 infection on the day
    """
    confirmed: Int!

    """
    The death toll caused by COVID19 infection of the day
    """
    deaths: Int!

    """
    The number of newly recovered cases from COVID19 infection of the day
    """
    recovered: Int!
  }

  """
  COVID19 Statistics of Australia
  """
  type AUStats {
    """
    The total confirmed cases of COVID19 infection
    """
    totalConfirmedCases: Int!

    """
    The newly confirmed cases of COVID19 infection of the past day
    """
    newlyConfirmedCases: Int!

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

    """
    The past COVID19 infection statistics
    """
    history: [History]!

    """
    COVID19 Statistics of New South Wales
    """
    NSW: Stats!

    """
    COVID19 Statistics of Northern Territory
    """
    NT: Stats!

    """
    COVID19 Statistics of Queensland
    """
    QLD: Stats!

    """
    COVID19 Statistics of South Australia
    """
    SA: Stats!

    """
    COVID19 Statistics of Tasmania
    """
    TAS: Stats!

    """
    COVID19 Statistics of Victoria
    """
    VIC: Stats!

    """
    COVID19 Statistics of Western Australia
    """
    WA: Stats!
  }

  type GlobalStats {
    """
    The total confirmed cases of COVID19 infection
    """
    totalConfirmedCases: Int!

    """
    The newly confirmed cases of COVID19 infection of the past day
    """
    newlyConfirmedCases: Int!

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

    """
    The past COVID19 infection statistics
    """
    history: [History]!

    """
    COVID19 Statistics of Australia
    """
    AU: AUStats!

    """
    COVID19 Statistics of China
    """
    CN: Stats!

    """
    COVID19 Statistics of Italy
    """
    IT: Stats!

    """
    COVID19 Statistics of Japan
    """
    JP: Stats!

    """
    COVID19 Statistics of Korea
    """
    KR: Stats!

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
    FR: Stats!

    """
    COVID19 Statistics of Germany
    """
    DE: Stats!

    """
    COVID19 Statistics of Spain
    """
    ES: Stats!
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
