import React from 'react';

function PageContainer({ children }) {
  return <main className="p-6 bg-gray-50 dark:bg-gray-800 flex-1">{children}</main>;
}

export default PageContainer;
