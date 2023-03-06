import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledButton = styled.button`
    color: blue;
`;

const StyledH2 = styled.h2`
    color: red;
    text-align: center;
`;

function Profile(props) {

  const { name, email } = props;

  return (
    <>
        <div>
          <StyledH2>{name}</StyledH2>
          <StyledH2>{email}</StyledH2>
          <StyledButton>Button</StyledButton>
        </div>
        <Link to="/">Home</Link>
    </>
  )
}

export default Profile;