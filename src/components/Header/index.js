import { Navbar, NavbarBrand, NavbarText } from "reactstrap";

import { Switch } from "components/Switch";

import { useSensorContext } from "Pages/SensorProvider";

/**
 * Header
 * Displays the connected or all sensors at present
 */
const Header = () => {
  const { handleClick, value } = useSensorContext();

  return (
    <Navbar
      expand="sm"
      style={{
        backgroundColor: "#ffe400",
        marginBottom: "1rem",
      }}
    >
      <NavbarBrand href="/">Sensors Management</NavbarBrand>
      <NavbarText style={{ display: "flex", padding: "0 10px" }}>
        Show All <Switch onClick={handleClick} value={value} /> Show Conntect
      </NavbarText>
    </Navbar>
  );
};

export default Header;
