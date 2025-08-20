import { usePageTitle } from '@/hooks/usePageTitle';
import { Welcome } from '../components/Welcome/Welcome';

export function HomePage() {
  usePageTitle('Dashboard');
  return (
    <>
      <Welcome />
    </>
  );
}
