import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import store from './redux/app/store.js';
import App from './App.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <App />
</Provider>,
)
