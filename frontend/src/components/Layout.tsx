import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold tracking-wide" style={{marginBottom: "1rem"}}>📚 BookHub</h1>
        </div>
      </nav>
      <div className="container mx-auto p-6">
        {children}
      </div>
    </div>
  );
};

export default Layout;