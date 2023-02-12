import React from 'react'
import { Helmet } from 'react-helmet'

const HelmetTags = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
    </Helmet>
  )
}

export default HelmetTags
