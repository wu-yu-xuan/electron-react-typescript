import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

function App() {
  return (
    <AppContainer>
      <pre>{JSON.stringify(process.versions, null, 2)}</pre>
    </AppContainer>
  );
}

render(<App />, mainElement);
