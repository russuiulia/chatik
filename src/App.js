import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout'
import Welcome from './components/Welcome';
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' exact element={<Welcome />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
