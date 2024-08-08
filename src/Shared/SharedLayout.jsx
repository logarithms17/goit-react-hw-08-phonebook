import Navigation from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
