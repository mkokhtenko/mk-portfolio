import { Logo } from "../Logo/Logo";

export const Header = () => {
  return (
    <header className="header">
      <Logo />
      <span className="header__link">menu</span>
    </header>
  );
};
