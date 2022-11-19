import Content from "./layout/Content";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import Container from "./layout/Container";
import { Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import Categories from "./pages/Categories";
import Uncategorized from "./pages/Uncategorized";
function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/:id" element={<Uncategorized />} />
          <Route path='/category/:id' element={<Categories />}/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
