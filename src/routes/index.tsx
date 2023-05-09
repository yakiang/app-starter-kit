import React, { FunctionComponent, lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { Routes, Route } from 'react-router-dom';

import Records from './List';

const AddRecord = lazy(() => import('./Plus'));

const Router: FunctionComponent = () => (
  <Routes>
    <Route path="/" element={<Records />} />
    <Route
      path="plus"
      element={
        <Suspense fallback={<Spin />}>
          <AddRecord />
        </Suspense>
      }
    />
  </Routes>
);

export default Router;
