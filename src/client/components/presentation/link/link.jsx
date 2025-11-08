import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

export default function Link({ presentation, children, className }) {
  return (
    <RouterLink to={`/epresentation/presentations/${presentation.id}`} className={className}>
      { children || presentation.title }
    </RouterLink>
  )
}
