import App from 'next/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { reducer } from '../Components/redux/reducer';
import rootSaga from '../Components/redux/sagas.js';
import { logger } from 'redux-logger';
import { MyPost, MyUsers } from '../interfaces/interfaces';

export default function MyApp({ Component, pageProps }) {
  const sagaMiddleware = createSagaMiddleware();

  interface ProjectReduxProps {
    searchPosts: MyPost[];
    post: MyPost[];
    posts: MyPost[];
    users: MyUsers[];
  }

  const tempStore = {
    post: [],
    users: [],
    posts: [],
    searchPosts: [],
  };

  const store = createStore(
    reducer,
    tempStore,
    composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
  );

  sagaMiddleware.run(rootSaga);
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />

        <style jsx global>{`
          body {
            font-family: 'Roboto Mono', monospace;
            color: blue;
          }
        `}</style>
      </Provider>
    </>
  );
}
