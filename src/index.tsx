import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';

const rootElement = document.getElementById('root');

const render = (Component: React.FC) => {
  ReactDOM.render(<Component />, rootElement);
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', async () => {
    const NextApp = await import('./components/App');
    render(NextApp.default);
  });
}
