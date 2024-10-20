import { useEffect, useState } from "react"
import Resolution from "./Component/Resolution/Resolution"
import { ThemeContext,themes } from "./Context/ThemeContext"

const App = () => {

  const [theme, setTheme] = useState(themes.light);

  const handleOnClick = () => {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  }

  const body = document.body;
  useEffect(()=>{
    switch(theme) {
      case themes.light :
        // body.classList.remove('bg-black');
        body.classList.remove('text-white');
        // body.classList.add('bg-white');
        body.classList.add('text-black');
        break;
      case themes.dark :
        // body.classList.remove('bg-white');
        body.classList.remove('text-black');
        // body.classList.add('bg-black');
        body.classList.add('text-white');
        break;
        default :
        // body.classList.remove('bg-black');
        body.classList.remove('text-white');
        // body.classList.add('bg-white');
        body.classList.add('text-black');
    }
  },[theme])

  return (
    <div>
      <ThemeContext.Provider value={{theme, handleOnClick}}>
      <Resolution theme={theme} />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
