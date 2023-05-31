import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../../components/AppBar';
const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayout;
