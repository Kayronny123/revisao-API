import React from "react";
import { HeaderContainer } from "./style";
import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { goToLoginPage } from "../../routes/cordinator";

export default function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logOutSession = () => {
    localStorage.removeItem("token");
  };

  return (
    <HeaderContainer>
      {token ? (
        <Button colorScheme="blue" onClick={logOutSession()}>
          Logout
        </Button>
      ) : (
        <Button colorScheme="blue" onClick={() => goToLoginPage(navigate)}>
          Login
        </Button>
      )}
    </HeaderContainer>
  );
}
