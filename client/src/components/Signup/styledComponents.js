import styled from 'styled-components';
import { Button } from 'semantic-ui-react';


export const StyledButton = styled(Button)`
    &&& {  
        background-color: #8b9fa3;
        color: white;
        margin-top: 20px;
    }   
    &&&:hover {
        background: #abc5cb;
    }
`;



