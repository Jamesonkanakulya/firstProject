import styled from 'styled-components'
import defaultBcg from '../images/room-1.jpeg';

const StyledHero = styled.header`

min-height: 100vh;
background: url(${props => (props.img?props.img:defaultBcg.jpeg)});
background-position: center;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
text-align: center;


`
export default StyledHero;



 
