import MainScreen from './screens/MainScreen'
import PricesScreen from './screens/PricesScreen'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>

      <Routes>
        <Route index element={<MainScreen />} />
        <Route path="/prices" element={<PricesScreen />}>

        </Route>
      </Routes>


    </>
  );
}

export default App;
