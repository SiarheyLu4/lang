import { Button, Container } from './ButtonsLang.styled';

import { useTranslation } from 'react-i18next';

const lngs = {
  en: { nativeName: 'EN' },
  ua: { nativeName: 'UA' },
};

export const ButtonsLang = () => {
  const { i18n } = useTranslation();

  return (
    <>
      <Container>
        {Object.keys(lngs).map((lng) => (
          <Button type="submit" key={lng} onClick={() => i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}>{lngs[lng].nativeName}</Button>
        ))}
      </Container>
      {/* <div>{t('login')}</div> */}
    </>
  )
}