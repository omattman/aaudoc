import wrapRoot from './wrap-root-element'

export const wrapRootElement = wrapRoot

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    'This application has been updated. ' +
      'Reload to display the latest version?'
  )
  if (answer === true) {
    window.location.reload()
  }
}
