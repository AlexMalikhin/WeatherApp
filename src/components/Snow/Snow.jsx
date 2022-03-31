// @ts-ignore
import styled, {keyframes} from "styled-components";

const snowFall = (randomPosition, leftDeviation) => keyframes`
  //20% {
  //  left: 50vw;
  //}
  //35% {
  //  left: 50vw;
  //}
  48% {
    //left: 50vw;
    //opacity: 0;
  }
  68% {
    //left: 50vw;
    //opacity: 0.3;
  }
  83% {
    //left: 50vw;
    //opacity: 0.2;
  }
  95%{
    //opacity: 0.07;
  }
  100% {
    opacity: 0.03;
    left: ${leftDeviation}vw;
    transform: translateY(${randomPosition}vh);
  }
`

export const Snow = styled.div`
  position: absolute;
  width: ${props => props.randomSize}vw;
  height: ${props => props.randomSize}vw;
  border-radius: 50%;
  background: #ffffff;
  top: ${props => props.topPosition}vw;
  left: ${props => props.leftPosition}vw;
  animation: ${(props) => snowFall(props.bottomPosition, props.leftDeviation)} ${(props) => props.randomAnimation}s linear infinite;
`
