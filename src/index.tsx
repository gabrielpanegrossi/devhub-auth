import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

if (process.env.REACT_APP_MOCK) {
  (async () => {
    const { worker } = await import('./mocks/browser');

    await worker.start();

    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );

    worker.printHandlers();
  })();
} else {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
