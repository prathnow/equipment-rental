import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import MainPage from "./pages/MainPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import EquipmentDetailsPage from "./pages/EquipmentDetailsPage";
import News from "./pages/News";
import SearchResults from "./pages/SearchResults";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route
              path="/"
              element={<MainPage />}
            />
            <Route
              path="/wynajem/:productName/:productId"
              element={<EquipmentDetailsPage />}
            />
            <Route
              path="/news/:newsTitle/:newsId"
              element={<News />}
            />
            <Route
              path="/results"
              element={<SearchResults />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
