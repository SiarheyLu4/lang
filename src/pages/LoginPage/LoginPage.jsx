import React from 'react'
import Media from 'react-media'
import LoginForm from '../../components/LoginForm/LoginForm'
import { ButtonsLang } from 'components/ButtonsLang/ButtonsLang'
import { Title, WrapperImg, FormLogin, Img, Container } from './LoginPage.styled'
import { mediaQueries } from '../../utils'
import signinImg from '../../images/photo/signin-img.png'
import Background from 'components/PageContainer/Background/Background';
import { useTranslation } from 'react-i18next'

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <Background>
      <Container>
        <Media queries={mediaQueries}>
          {(matches) => (
            <>
              {matches.tablet && (
                <WrapperImg>
                  <Img
                    src={signinImg}
                    alt={t("img.altPageManShop")}
                  ></Img>  
                  <Title>{t("financeApp")}</Title>
                </WrapperImg>
              )}
              {matches.desktop && (
                <WrapperImg>
                  <Img
                    src={signinImg}
                    alt={t("img.altPageManCart")}
                  ></Img>  
                  <Title>{t("financeApp")}</Title>
                </WrapperImg>
              )}
            </>
          )}
        </Media>

        <FormLogin >
          <ButtonsLang />
          <LoginForm />
        </FormLogin>
      </Container>
    </Background>
  )
}

export default LoginPage