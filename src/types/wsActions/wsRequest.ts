export enum EWsRequestTypes {
  openMessage = 'open_message',
}

export interface IOpenMessageRequest {
  type: EWsRequestTypes.openMessage
  username: string
}

export type TWsRequest = IOpenMessageRequest
