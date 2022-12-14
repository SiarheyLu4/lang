import { Button, Container } from './ButtonsLangHeader.styled';

import { useTranslation } from 'react-i18next';

const lngs = {
  en: { nativeName: 'EN' },
  ua: { nativeName: 'UA' },
};

export const ButtonsLangHeader = () => {
  const { i18n } = useTranslation();

  return (
    <>
      <Container>
        {Object.keys(lngs).map((lng) => (
          <Button color='white' type="submit" key={lng} onClick={() => i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}>{lngs[lng].nativeName}</Button>
        ))}
      </Container>
      {/* <div>{t('login')}</div> */}
    </>
  )
}