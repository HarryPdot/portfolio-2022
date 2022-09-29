import { Twirl as Hamburger } from 'hamburger-react';
import { useState } from 'react';

const NavBar = () => {
  const [isOpen, setOpen] = useState(true);

  return (
    <Hamburger
      toggled={isOpen}
      toggle={setOpen}
      rounded
      label="Show menu"
      hideOutline={false}
      color="#FFF"
    ></Hamburger>
  );
};

export { NavBar };
