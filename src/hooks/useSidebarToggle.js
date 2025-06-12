import { useState } from 'react';

export default function useSidebarToggle() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return { isOpen, toggle };
}
