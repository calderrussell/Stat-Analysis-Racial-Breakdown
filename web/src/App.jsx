import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import './layouts/MainLayout.css';

// Pages
import Home from './pages/Home';
import Thesis from './pages/Thesis';
import Proposal from './pages/Proposal';
import AnnotatedBib from './pages/AnnotatedBib';
import DataAnalysis from './pages/DataAnalysis';
import Reflection from './pages/Reflection';
import ThankYous from './pages/ThankYous';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="proposal" element={<Proposal />} />
          <Route path="thesis" element={<Thesis />} />
          <Route path="annotated-bib" element={<AnnotatedBib />} />
          <Route path="data-analysis" element={<DataAnalysis />} />
          <Route path="reflection" element={<Reflection />} />
          <Route path="thank-yous" element={<ThankYous />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
