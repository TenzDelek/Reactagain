import Tenzin from "./Tenz"

function App() {
  const username="Tenzin"

  return (
    //this is call fragment in jsx we only can export 1 element so we do this
    <> 
  <Tenzin/>
  <h1>again</h1>
  
  <p> hi my name is {username}</p> 
  </>
  //the { } u see is call evaluated expression -> means only the output can be written here
  //dont write if for loop like that in that
  )
}

export default App
