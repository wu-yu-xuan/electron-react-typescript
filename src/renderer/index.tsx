import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Typography } from 'antd';
import style from './style.scss';

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

function App() {
  return (
    <AppContainer>
      <>
        <Typography.Title level={1}>hello world!</Typography.Title>
        <pre className={style.pre}>{JSON.stringify(process.versions, null, 2)}</pre>
      </>
    </AppContainer>
  );
}

render(<App />, mainElement);
