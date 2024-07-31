import styled from "styled-components";

const TextStyled = styled.p`
    font-weight: 400;
    font-size: 20px;
    color: #000000;
    margin: 5px 0;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
`;

function Text(props) {
    return(
        <TextStyled>{props.text}</TextStyled>
    )
}

export default Text;