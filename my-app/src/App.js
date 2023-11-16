import "./App.css";

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <h1 className="App-header">
          {" "}
          <em>Easy shop guide</em>{" "}
        </h1>
        <div className="App-container">
          <div className="App-catagory">
            <a href="#">home</a>
          </div>
          <div className="App-catagory">
            {" "}
            <a href="#">fashon</a>
          </div>
        </div>
      </main>
      <footer className="App-footer">
        Coded by Rita Rudzite{" "}
        <a
          href="https://github.com/RuRi-Code-Cloud/findlink"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
