import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { authSelectors } from '../../redux/auth';
import authOperations from '../../redux/auth/auth-operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const mail = useSelector(authSelectors.getUserMail)

   return (
      <>
        <Navbar.Text>
          {mail}
        </Navbar.Text>
        <Button onClick={() => dispatch(authOperations.logOut())} variant="outline-light" size="sm" style={{marginLeft: 20}}>Log out</Button>
      </>
    );
  };