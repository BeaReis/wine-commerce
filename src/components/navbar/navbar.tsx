import { useRouter } from "next/router";
import {
  CartCounter,
  Nav,
  NavIcon,
  NavIconWrapper,
  NavItem,
  NavItemWrapper,
  Wrapper,
} from "./navbar.style";

const Navbar: React.FC = () => {
  const cart = "/cart.png";
  const busca = "/busca.png";
  const conta = "/conta.png";
  const wine = "/wine.png";
  const router = useRouter();
  const counter = 0;

  return (
    <>
      <Nav>
        <NavIcon src={wine} type="logo" onClick={() => router.push("/")} />
        <NavItemWrapper>
          <NavItem>Clube</NavItem>
          <NavItem>Loja</NavItem>
          <NavItem>Produtores</NavItem>
          <NavItem>Ofertas</NavItem>
          <NavItem>Eventos</NavItem>
        </NavItemWrapper>
        <NavIconWrapper>
          <NavIcon src={busca} type="icon" />
          <NavIcon src={conta} type="icon" />
          <Wrapper>
            <NavIcon src={cart} type="icon" />
            <CartCounter>{counter}</CartCounter>
          </Wrapper>
        </NavIconWrapper>
      </Nav>
    </>
  );
};

export default Navbar;
