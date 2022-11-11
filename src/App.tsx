import Content from "./layout/Content";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import Container from "./layout/Container";
import "./styles/App.scss";
function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Sidebar />
        <Content />
      </Container>
    </div>
  );
}

export default App;
