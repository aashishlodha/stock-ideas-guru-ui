import { Link, useLocation } from 'react-router-dom';
import { breadcrumbMap } from '../routes/breadcrumbs';

export default function Breadcrumbs() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  const crumbs = pathSegments.map((_, idx) => {
    const path = `/${pathSegments.slice(0, idx + 1).join('/')}`;
    return {
      name: breadcrumbMap[path] || path,
      path,
    };
  });

  return (
    <nav>
      {crumbs.map((crumb, idx) => (
        <span key={crumb.path}>
          {idx > 0 && ' / '}
          <Link to={crumb.path}>{crumb.name}</Link>
        </span>
      ))}
    </nav>
  );
}
