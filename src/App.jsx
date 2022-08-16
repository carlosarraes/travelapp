import React from 'react'
import Tours from './components/Tours'

function App() {
  return (
    <main>
        <section>
          <div className="title">
            <h2>our tours</h2>
            <div className="underline"></div>
          </div>
          <div>
            <Tours />
          </div>
        </section>
    </main>
  )
}

export default App