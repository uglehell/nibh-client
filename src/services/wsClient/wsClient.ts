import { WEB_SOCKETS_URL } from '../../constants/url-addresses'
import { TWsEvent } from '../../types/wsActions/wsEvent'
import { TWsRequest } from '../../types/wsActions/wsRequest'

export default class WsClient {
  client: WebSocket

  constructor() {
    this.client = new WebSocket(`${WEB_SOCKETS_URL}`)
  }

  onMessage = (callback: (event: TWsEvent) => void) => {
    this.client.onmessage = ({ data }) => {
      const event = JSON.parse(data) as TWsEvent

      callback(event)
    }
  }

  send = (wsRequest: TWsRequest) => {
    this.client.send(JSON.stringify(wsRequest))
  }

  close = () => {
    this.client.close()
  }

  onError = (callback: (event: Event) => void) => {
    this.client.onerror = callback
  }

  onClose = (callback: (event: Event) => void) => {
    this.client.onclose = callback
  }

  onOpen = (callback: (event: Event) => void) => {
    this.client.onopen = callback
  }
}
