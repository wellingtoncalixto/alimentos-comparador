import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Comparison from "./pages/comparison/Comparison";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "./components/error/ErrorComponent";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient({});
  return (
    <ErrorBoundary FallbackComponent={ErrorComponent}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/comparison" element={<Comparison />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
