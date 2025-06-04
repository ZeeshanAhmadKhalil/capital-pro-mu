'use client';

import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { ReactNode } from 'react';
import store from './store';

function StoreProvider({ children }: { children: ReactNode }) {
  persistStore(store);

  return <Provider store={store}>{children}</Provider>;
}

export default StoreProvider;
