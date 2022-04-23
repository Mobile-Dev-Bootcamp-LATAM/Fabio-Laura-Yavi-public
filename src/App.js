import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CountryListView } from './views/CountryListView';
import { CountryDetailView } from './views/CountryDetailView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CountryListView/>}/>
        <Route path="detail" element={<CountryDetailView/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
