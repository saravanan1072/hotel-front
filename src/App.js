import './App.css';
import Routers from './Routers';
import store from './Utility/Store';
 import { Provider } from 'react-redux';

function App() {
  return (
<>

<Provider store={store}>
    <div className="App">
    <Routers/>
    </div>
  </Provider> 
</>
   
  );
}

export default App;
