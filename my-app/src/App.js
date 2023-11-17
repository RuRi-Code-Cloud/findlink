import "./App.css";

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <h1 className="App-header">
          {" "}
          <em>Easy shop guide</em>{" "}
        </h1>
        <a href="bedroom.html">Bedroom</a>
        <div className="App-container">
          <div className="App-catagory">
            <div class="btn-group" role="group">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Home
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/bedroom.html">
                    Bedroom
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Living room
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Kitchen
                  </a>
                </li>
              </ul>
            </div>
            <div class="btn-group" role="group">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Fashon
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Women
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Man
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Kids
                  </a>
                </li>
              </ul>
            </div>
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
