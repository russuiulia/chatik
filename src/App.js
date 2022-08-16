import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthForm from './components/Auth/AuthForm';
import Layout from './components/Layout/Layout'
import Welcome from './components/Welcome';
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' exact element={<Welcome />} />
          <Route path='/auth' exact element={<AuthForm />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
