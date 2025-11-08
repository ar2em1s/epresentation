import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Redirect404() {
  return (<Navigate to='/epresentation/not_found' replace={true}/>)
}
