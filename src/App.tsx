import { Routes, Route } from 'react-router-dom';

import V2 from './V2';
import V1 from './V1';

function App() {
  return (
    <Routes>
      <Route path="v2" element={<V2 />} />
      <Route path="*" element={<V1 />} />
    </Routes>
  );
}

export default App;
