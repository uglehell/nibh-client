import appState from "../store/appState"

export const disconnectWsClient = () => {
  appState.wsClient?.close()
  appState.setWsClient(null)
}