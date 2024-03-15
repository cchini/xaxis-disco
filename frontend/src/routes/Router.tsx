import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { discoPaths } from './disco-paths';
import { DiscoPaths } from './models/path.model';
import Home from '../pages/Home/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        {discoPaths.map(page => (
          <Route
            key={page.path}
            path={`/${page.path}`}
            element={<page.component />}></Route>
        ))}
        <Route path="*" element={<Navigate to={DiscoPaths.Home} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
