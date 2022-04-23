import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CountryListView } from "./views/CountryListView";
import { CountryDetailView } from "./views/CountryDetailView";
import { AppContextProvider } from "./context/context.provider";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<CountryListView />} />
          <Route path="detail" element={<CountryDetailView />}></Route>
        </Routes>
      </Router>
    </AppContextProvider>
  );
}

export default App;
