import { Route, Routes } from 'react-router-dom';
import { GuidesPage } from '@/pages/Guides.page';
import MainLayout from '../layouts/MainLayout';
import { HomePage } from '../pages/Home.page';
import { IdeasPage } from '../pages/Ideas.page';
import { StocksPage } from '../pages/Stocks.page';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="ideas" element={<IdeasPage />} />
        <Route path="stocks" element={<StocksPage />} />
        <Route path="guides" element={<GuidesPage />} />
      </Route>
    </Routes>
  );
}
