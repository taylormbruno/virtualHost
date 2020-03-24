import styled from 'styled-components';
import { Table, Button } from 'semantic-ui-react';


export const StyledCell = styled(Table.HeaderCell)`
    &&& {  
        background-color: #a9a6c9;
        color: white;
    }   
    `;

export const StyledButton = styled(Button)`
    &&& {
        width: 37px;
        background-color: #a9a6c9;
    }
    &&&:hover {
        background-color: #807da1;
    }
`