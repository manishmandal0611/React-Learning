import React from 'react'

const App = () => {

  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: "Raman",
  });




  return (
    <div>
      <h1>Count is - {count}</h1>
      <h1>name is - {user.name}</h1>

      <button onClick={() => {}}>Increment</button>
      <button onClick={() => {}}>Change name</button>
    </div>
  );
};

export default App;
