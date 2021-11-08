import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';

ReactDOM.render(
  // React.StrictMode: 엄격모드
  // 배포해도 사용자 입장에서는 적용되지 않기 때문에 편하게 사용해도 된다.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
