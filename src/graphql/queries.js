/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHeartbeat = /* GraphQL */ `
  query GetHeartbeat($id: ID!) {
    getHeartbeat(id: $id) {
      id
      deviceID
      value
      index
      createdAt
      updatedAt
    }
  }
`;
export const listHeartbeats = /* GraphQL */ `
  query ListHeartbeats(
    $filter: ModelheartbeatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHeartbeats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        deviceID
        value
        index
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
