import React, { useCallback, useState } from 'react'

let ogFunc = null

const Foo = (props) => {
  const [count, setCount] = useState(42)

  const _clickHandler = (e) => {
    setCount(count + 1)
  }
  const clickHandler = useCallback(_clickHandler, [count])
  //const clickHandler = _clickHandler

  if (!ogFunc) {
    ogFunc = _clickHandler
  }

  window.ogFunc = ogFunc

  return (
    <>
    <h1>Count Test</h1>
    <p>{`${count}`}</p>
    <button onClick={clickHandler}>Increment</button>
    {console.log('Test', clickHandler === ogFunc)}
    </>
  )
}

export default Foo