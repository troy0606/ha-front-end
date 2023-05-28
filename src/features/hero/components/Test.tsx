import React, { useEffect } from 'react'

export default function Test() {
  useEffect(()=> {
    console.log('test-rerender')
  })
  return (
    <div>Test</div>
  )
}
