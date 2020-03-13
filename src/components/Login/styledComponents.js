import styled from 'styled-components';
import { Button } from 'semantic-ui-react';


export const StyledButton = styled(Button)`
    &&& {  
        background-color: #8b9fa3;
        color: white;x
    }
    &&&.shortBtn {
        width: 30%;
        margin: 2%;  
        margin-top: 30px;
    }   
    &&&:hover {
        background: #abc5cb;
    }
`;