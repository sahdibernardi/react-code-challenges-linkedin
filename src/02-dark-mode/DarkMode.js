import { useState } from "react";

export default function DarkMode () {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

  const changeDarkMode = (boolean) => {
    boolean ? setIsDarkModeOn(true) : setIsDarkModeOn(false);
    return;
  }

  return (
    <div className={isDarkModeOn ? 'page dark-mode' : 'page'}>
      <button className='dark-mode-button' onClick={() => changeDarkMode(true)}>
        Dark Mode
      </button>
      <button className='light-mode-button' onClick={() => changeDarkMode(false)}>
        Light Mode
      </button>
    </div>
  )
}
