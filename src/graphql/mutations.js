/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createHeartbeat = /* GraphQL */ `
  mutation CreateHeartbeat(
    $input: CreateHeartbeatInput!
    $condition: ModelheartbeatConditionInput
  ) {
    createHeartbeat(input: $input, condition: $condition) {
      id
      deviceID
      value
      index
      createdAt
      updatedAt
    }
  }
`;
export const updateHeartbeat = /* GraphQL */ `
  mutation UpdateHeartbeat(
    $input: UpdateHeartbeatInput!
    $condition: ModelheartbeatConditionInput
  ) {
    updateHeartbeat(input: $input, condition: $condition) {
      id
      deviceID
      value
      index
      createdAt
      updatedAt
    }
  }
`;
export const deleteHeartbeat = /* GraphQL */ `
  mutation DeleteHeartbeat(
    $input: DeleteHeartbeatInput!
    $condition: ModelheartbeatConditionInput
  ) {
    deleteHeartbeat(input: $input, condition: $condition) {
      id
      deviceID
      value
      index
      createdAt
      updatedAt
    }
  }
`;
