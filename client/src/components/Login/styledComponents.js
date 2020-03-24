import styled from 'styled-components';
import { Button } from 'semantic-ui-react';


export const StyledButton = styled(Button)`
    &&& {  
        background-color: #8b9fa3;
        color: white !important;
        margin: auto !important;
    }
    &&&.shortBtn {
        width: 30%;
        margin: 2% !important;  
        margin-bottom: 20px !important;        
    }   
    &&&:hover {
        background: #abc5cb;
    }
`;