import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './Router';
import PageLoader from './components/Spinner/PageLoader';

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Router>
        <Routing />
      </Router>
    </Suspense>
  );
}

export default App;
