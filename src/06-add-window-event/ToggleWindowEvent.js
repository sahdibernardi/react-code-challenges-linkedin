import { useEffect, useState } from 'react'
import WindowEvent from './WindowEvent'
import { dblClick } from '@testing-library/user-event/dist/click';

export default function ToggleWindowEvent () {
  const [windowEvent, setWindowEvent] = useState(false)

  useEffect(() => {
    if(windowEvent) {
      const btnElement = document.getElementById('toggle-btn')
      btnElement.addEventListener('dblclick', alert('Window Event is Active!'))
    }
  }, [windowEvent])


  return (
    <div>
      <button id='toggle-btn' onClick={() => setWindowEvent(prevState => !prevState)}>Toggle Window Event</button>
      {windowEvent && <WindowEvent />}
    </div>
  )
}
