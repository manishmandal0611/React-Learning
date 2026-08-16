// import React from 'react'
// import Contact from './Contact'
// import something, { one, two, } from './test'
  
// const App = () => {

//   something ();

//   one();

//   two();


//   return (
//     <div>
//       <h1>hey i am app</h1>
//       <h1>let's started learn with react</h1>
//       <Contact />
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {
    let [count, setCount] = useState (0);

    console.log(count);
  return (
    <div>
      <h1>Count is - {count} </h1>

      <button 
      onClick={() => {
        setCount(count + 5);
      }}
      
      >

        Increment

      </button>
    </div>
  )
}

export default App

