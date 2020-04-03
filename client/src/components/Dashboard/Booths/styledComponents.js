import styled from "styled-components";
import { Icon, Button } from "semantic-ui-react";

export const StyledIcon = styled(Icon)`
  &&& {
    transform: scale(4);
    padding: 0;
    margin: 0;
    color: #a9a6c9;
    transition: all 0.2s ease;
  }
  &&&:hover {
    transform: scale(4.7);
  }
`;

export const StyledButton = styled(Button)`
  &&& {
    background-color: #a9a6c9;
    color: white !important;
    width: 85%;
    margin: 15px auto;
    padding-bottom: 30px;
  }
`;
