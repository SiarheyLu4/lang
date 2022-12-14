import { Container, Img, FormLogin } from "pages/LoginPage/LoginPage.styled";
import { RegisterImg, Title } from "./RegisterPage.styled";
import Media from 'react-media'
import { mediaQueries } from '../../utils'
import  RegisterForm  from '../../components/RegisterForm/RegisterForm';
import registerimg from '../../images/photo/register-img.png'
import Background from 'components/PageContainer/Background/Background';
import { ButtonsLang } from 'components/ButtonsLang/ButtonsLang'
import { useTranslation } from "react-i18next";

const RegisterPage = () => {
  const { t } = useTranslation();

  return (
    <Background>
      <Container>
         <Media queries={mediaQueries}>
          {(matches) => (
            <>
              {matches.tablet && (
                <RegisterImg>
                  <Img
                    src={registerimg}
                    alt={t("img.altPageGirl")}
                    width="274px"
                    height="250px"
                  />
                  
                  
                  <Title>{t("financeApp")}</Title>
               </RegisterImg>
              )}
              {matches.desktop && (
                <RegisterImg>
                  <Img
                    src={registerimg}
                    alt={t("img.altPageGirl")}
                    width="452px"
                    height="413px"
                  />
                  
                  <Title>{t("financeApp")}</Title>
                </RegisterImg>
              )}
            </>
          )}
        </Media>
        
        
        <FormLogin>
          <ButtonsLang />
          <RegisterForm />
        </FormLogin>
      </Container>
      </Background>
  )
}

export default RegisterPage;