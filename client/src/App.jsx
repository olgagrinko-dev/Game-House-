import MyContext from "./context/context";
import './App.css'

function App() {

  return (
    <>
      <MyContext.Provider value={data}>
        {route}
      </MyContext.Provider>

    </>
  )
}

export default App
