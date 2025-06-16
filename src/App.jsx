import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import PageContainer from './components/PageContainer';
import DashboardPage from './pages/DashboardPage';
import EmployeesPage from './pages/EmployeesPage';
import OnboardingPage from './pages/OnboardingPage';
import DocumentsPage from './pages/DocumentsPage';
import useSidebarToggle from './hooks/useSidebarToggle';

function App() {
  const { isOpen, toggle } = useSidebarToggle();

  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div className="flex flex-col flex-1">
        <Header toggleSidebar={toggle} />
        <PageContainer>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/employees" element={<EmployeesPage />} />
            <Route path="/onboarding" element={<OnboardingPage />} />
            <Route path="/documents" element={<DocumentsPage />} />
          </Routes>
        </PageContainer>
      </div>
    </div>
  );
}

export default App;
