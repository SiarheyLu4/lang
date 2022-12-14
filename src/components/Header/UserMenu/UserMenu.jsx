import { useSelector } from 'react-redux';
import { userName } from '../../../redux/auth/auth-selectors';
import { StyledName } from './StyledName';
import { StyledUserMenu } from './StyledUserMenu';
import Logout from '../Logout/Logout';

import { ButtonsLangHeader } from 'components/ButtonsLang/ButtonsLangHeader/ButtonsLangHeader';


const UserMenu = () => {
  const name = useSelector(userName);
  return (
    <StyledUserMenu>
      <StyledName>{name}</StyledName>
      <Logout />
      <ButtonsLangHeader />
    </StyledUserMenu>
  );
};

export default UserMenu;
