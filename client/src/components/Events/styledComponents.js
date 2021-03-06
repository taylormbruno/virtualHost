import styled from 'styled-components';
import { Button, Grid } from 'semantic-ui-react';


export const StyledButton = styled(Button)`
    &&& {  
        background-color: #8b9fa3;
        color: white;
        font-family: 'Source Sans Pro', sans-serif;
    }  
    &&&:hover {
        background: #abc5cb;
    }
`;

const StyledGrid = styled(Grid.Column)`
    &&& {  
        margin: auto
    }  
`;
export {StyledGrid};








