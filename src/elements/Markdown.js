// Vendor Assets
import React, { PureComponent } from 'react'
import styled from 'styled-components'
import marked from 'marked'

const Div = styled.div`
  code {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    background-color: rgba(27,31,35,0.05);
    border-radius: 3px;
  }
`

class Markdown extends PureComponent {
  rawMarkup = () => {
    const rawMarkup = marked(this.props.content, { sanitize: true })
    return { __html: rawMarkup }
  }

  render () {
    return (
      <Div>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </Div>
    )
  }
}

export default Markdown
