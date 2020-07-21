import { gql } from "apollo-server";

export default gql`
  type Query {
    user(id: ID!): User!
    venue(id: ID!): Venue!
    venueBySlug(slug: String!): Venue!
    venueTypes: [VenueType]!
    venueType(id: ID!): VenueType
    venues(
      venueTypeIds: String
      cityIds: String
      sort: String
      first: Int
    ): [Venue]
    similarVenues(id: ID!, radius: Int, first: Int): [Venue]
    cities(first: Int, query: String): [City]!
    me: User
  }

  type VenueType {
    id: Int!
    name: String!
    image: String
    venues: [Venue]
  }

  type Venue {
    id: Int!
    name: String!
    slug: String!
    description: String
    streetAddress: String!
    lat: Float
    lng: Float
    venueTypes: [VenueType]
    creator: User
    users: [User]
    zipcode: Int!
    city: String
    state: String
    venueStats: VenueStats
    createdAt: String
  }

  type VenueStats {
    favorites: Int
    favoriteByCurrentUser: Boolean
  }

  type City {
    id: Int!
    name: String!
    state: String!
    lat: Float
    lng: Float
  }

  type Mutation {
    #        post(url: String!, description: String!): Link!
    signup(
      email: String!
      password: String!
      firstName: String!
      lastName: String!
      zipcode: String
    ): AuthPayload
    login(email: String!, password: String!): AuthPayload
    createVenue(
      name: String!
      streetAddress: String!
      zipcode: Int!
      lat: Float
      lng: Float
      city: CityInput
      venueType: VenueTypeInput
    ): Venue
    createUserVenueFavorite(venueId: Int!): VenueStats
    deleteUserVenueFavorite(venueId: Int!): VenueStats
  }

  input CityInput {
    id: Int!
  }

  input VenueTypeInput {
    id: Int!
  }

  type AuthPayload {
    token: String
    user: User
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    zipcode: String
    venues: [Venue]
    favoriteVenues: [Venue]
  }
`;
