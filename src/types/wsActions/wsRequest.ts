export enum EWsRequestTypes {
  openMessage = 'open_message',
  homeClickMessage = 'home_click_message',
}

export interface IOpenMessageRequest {
  type: EWsRequestTypes.openMessage
  username: string
}

export interface IHomeClickMessageRequest {
  type: EWsRequestTypes.homeClickMessage
  lastClick: string
}

export type TWsRequest = IOpenMessageRequest | IHomeClickMessageRequest
