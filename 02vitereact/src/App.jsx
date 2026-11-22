import { useState } from "react";

function App() {

  let [Counter, setCounter] = useState(15) //is m phla counter value k lia h dosra reference h k jis m hm log koi bh nam likh sgta hn koi bh sorf setcounter zrori ni
  
// let Counter = 15 // os s variable update ho ga but y ui k jgha hmy nzr ni ay g is k lia hm state \s use kra g 
const addValue = () => {
  console.log("clicked", Counter);

  if (Counter < 20) {
     Counter = Counter + 1
     setCounter(Counter)
  }
  else {
    alert("value is greater than 20")
  }
 
}
//  let [counter, subCounter] = useState(15) // y lgae g to  oounter remove wli jgha pr kr dna h reference k lia iss kia ho g k is  sirf remove k nmbr km hn g ..
const removeValue = () => {
  console.log("clicked", Counter)
  if (Counter > 0) {
      Counter = Counter - 1
      setCounter(Counter)
  }else{
    alert("vlaue is less then 0")
  }


}
  return (
    <>
     <h1>My name is Afnan</h1>
     <h2>Counter value: {Counter}</h2>

     <button onClic k={addValue}>Add value {Counter}</button>
     <br/>
     <button onClick={removeValue}>Remove value {Counter}</button>

     <p>footer : {Counter}</p>
    </>
  )
}

export default App
