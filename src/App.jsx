import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import MainPage from "./pages/MainPage";
import Test from "./pages/Test";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route
              path="/"
              element={<MainPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
