import styled from 'styled-components';
import { Button } from 'semantic-ui-react';


export const StyledButton = styled(Button)`
    &&& {  
        background-color: #9fb8bf;
        color: white !important;
        margin: 8px 10px !important;
        display: inline-block;
        width: 200px;
    }
    &&&:hover {
        background: #abc5cb;
    }
`;