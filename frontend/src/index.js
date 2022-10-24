import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/store';

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement);

const store = configureStore({});

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}


const renderApplication = () => {
	root.render(
		<React.StrictMode>
			<Root />
		</React.StrictMode>
	);
}

renderApplication();

// ReactDOM.render(
//   <React.StrictMode>
//     <Root />
//   </React.StrictMode>,
//   document.getElementById('root')
// );