import styled from 'styled-components';
import { Button } from 'semantic-ui-react';


export const StyledButton = styled(Button)`
    &&& {  
        background-color: #8b9fa3;
        color: white !important;
        margin: 10px 10px !important;
        display: inline-block;
        width: 200px;
    }
    &&&:hover {
        background: #abc5cb;
    }
`;