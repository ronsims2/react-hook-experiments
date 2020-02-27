import React, { useCallback, useState } from 'react'
import { render } from 'react-dom'
import Hello from './Hello'
import Foo from './Foo'
import './style.css'

let func = null

const App = (props) => {
  return (
    <>
    <h1>The Test</h1>
    <Foo />
    </>
  )
}

render(<App />, document.getElementById('root'));
