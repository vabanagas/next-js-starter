import React from 'react'
import App from 'next/app'
import GlobalStyle from '../components/GlobalStyle'
import Layout from '../components/Layout'

class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props

    return (
      <Layout>
        <Component {...pageProps} />
        <GlobalStyle />
      </Layout>
    )
  }
}

export default MyApp
