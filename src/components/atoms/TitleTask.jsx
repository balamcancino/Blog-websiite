import styled from "styled-components";

const TitleStyled = styled.h2`
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 25px;
    color: #ffffff;
    text-align: center;
    margin-left: 15px;
`;


function TitleTask(props) {
    return(
        <TitleStyled>{props.text}</TitleStyled>
    )
}

export default TitleTask