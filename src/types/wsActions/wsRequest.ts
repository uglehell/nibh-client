export enum EWsRequestTypes {
  openMessage = 'open_message',
  homeClickMessage = 'home_click_message',
  newMessage = 'new_message',
}

export interface IOpenMessageRequest {
  type: EWsRequestTypes.openMessage
  id: string
}

export interface IHomeClickMessageRequest {
  type: EWsRequestTypes.homeClickMessage
  lastClick: string
}

export interface INewMessageRequest {
  type: EWsRequestTypes.newMessage
  author: string
  text: string
}

export type TWsRequest = IOpenMessageRequest | IHomeClickMessageRequest | INewMessageRequest
