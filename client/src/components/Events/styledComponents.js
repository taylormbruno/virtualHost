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

<<<<<<< HEAD
export const StyledGrid = styled(Grid.Column)`
=======
const StyledGrid = styled(Grid.Column)`
>>>>>>> fe18a25ba54881fef7583cb01984366e70fd2cf0
    &&& {  
        margin: auto
    }  
`;
<<<<<<< HEAD

// export const StyledCard = styled(Card)`
//     .cardStyle {
//         textAlign='center';
//     }
// `;
=======
export {StyledGrid};








>>>>>>> fe18a25ba54881fef7583cb01984366e70fd2cf0
