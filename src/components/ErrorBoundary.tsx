import React from 'react'

type Props = {
  children: React.ReactNode
}

export class ErrorBoundary extends React.Component<Props> {
  componentDidCatch(error: Error) {
    console.log(error)
  }

  render() {
    return this.props.children
  }
}
