// Vendor Assets
import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'

// Project Assets
import * as api from './utils/api'

export default {
  getSiteProps: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    await api.initClient()
    const educations = await api.getStuff('educations', api.sortByStartDate)
    const experiences = await api.getStuff('experiences', api.sortByStartDate)
    const portfolioItems = await api.getStuff('portfolioItem')
    const projects = await api.getStuff('projects', api.sortByStartDate)
    const skills = await api.getStuff('skills')
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getProps: () => ({
          portfolioItems,
        }),
      },
      {
        path: '/resume',
        component: 'src/containers/Resume',
        getProps: () => ({
          educations,
          experiences,
          projects,
          skills,
        }),
      },
      {
        path: '/portfolio',
        component: 'src/containers/Home',
        getProps: () => ({
          portfolioItems,
        }),
        children: portfolioItems.map(item => ({
          path: `/${item.id}`,
          component: 'src/components/Portfolio/Page',
          getProps: () => ({
            ...item,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render () {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
