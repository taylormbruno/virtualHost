import styled from 'styled-components';
import { Button, Segment } from 'semantic-ui-react';


export const StyledButton = styled(Button)`
    &&& {  
        background-color: #9fb8bf;
        color: white !important;
        margin: 10px auto;
    }   
    &&&:hover {
        background: #abc5cb;
    }
    &&&.bottom {
        margin-left: 20px;
    }
`;

export const StyledSegment = styled(Segment)`
    &&& {  
        margin-top: 100px;
    }   
`;



