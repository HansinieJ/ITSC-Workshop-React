import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Calculator</h1>
      </div>

      <div>
        <Input
          id="Number1"
          label="Enter Number"
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />



      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          +{count}
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          - {count}
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          *{count}
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          /{count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App