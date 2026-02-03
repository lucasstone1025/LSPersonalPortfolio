import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Suspense fallback={null}><ProjectDetail /></Suspense>} />
      </Routes>
    </Layout>
  );
}

export default App;
