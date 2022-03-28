import React from "react"

const Index = () => {
  return (
    <div>
      <style jsx global>{`
        html,
        body {
          background: black;
        }
      `}</style>
      <style jsx>{`
        div {
          display: flex;
          color: white;
          font-family: sans-serif;
          width: 100vw;
          height: 100vh;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
      `}</style>

      <h1>Site en construction</h1>
      <img src="static/giphy.gif" />
    </div>
  )
}

export default Index
