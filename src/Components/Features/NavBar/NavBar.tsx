import { useState } from 'react';
import { container, name } from './NavBar.css';
import clsx from 'clsx';

const NavBar = () => {
  const [isOpen, setOpen] = useState(true);

  return (
    <nav className={container}>
      <h1 className={name}>Harry Pham</h1>
    </nav>
  );
};

export { NavBar };
