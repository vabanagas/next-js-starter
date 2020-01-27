import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

const Content = styled.div``

export interface ILayoutProps {
  children: React.ReactNode
}

const Layout = (props: ILayoutProps) => (
  <>
    <Head>
      <title>Hello World!</title>
      <meta title="description" content="Next.js Starter Project" />
    </Head>
    <Content>{props.children}</Content>
  </>
)

export default Layout
