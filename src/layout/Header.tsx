import { Account, Logo, SearchBar } from "../components/Header";

const Header: React.FC = () => {
  return (
    <header>
      <Logo />
      <SearchBar />
      <Account />
      
    </header>
  );
};

export default Header;
