import { RouterProvider } from 'react-router-dom';
import './App.css';
import './style.css'
import { router } from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <Toaster
        position="top-right"
      />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
