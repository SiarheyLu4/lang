import React, { useEffect } from 'react';
import { Background, Table, TextItem, TextItemText, TextList, TitleItem, TitleList } from './Currency.styled';
// import Spinner from 'components/Spinner/Spinner';
import { fetchCurrency } from 'redux/currency/currency-operation';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrency } from 'redux/currency/currency-selector';
// import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

export const Currency = () => {
  const { t } = useTranslation();

  const { currency: data } = useSelector(getCurrency);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrency());
  }, [dispatch]);

  // if (error?.status === 429) {
  //   toast.warn('So more request', {
  //     position: 'top-right',
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: 'colored',

  //     style: {
  //       maxWidth: '250px',
  //       backgroundColor: '#c0b84b',
  //       margin: '0 auto',
  //       marginBottom: '10px',
  //     },
  //   });
  // }

  return (
    <Table>
      <TitleList>
        <TitleItem>{t("Currency")}</TitleItem>
        <TitleItem>{t("Purchase")}</TitleItem>
        <TitleItem>{t("Sale")}</TitleItem>
      </TitleList>
      <TextList>
        {data?.length ? (
          data?.map(item => (
            <TextItem key={item.currencyCodeA.id}>
              <TextItemText>{item.currencyCodeA.name}</TextItemText>
              <TextItemText>{item.rateBuy.toFixed(2)}</TextItemText>
              <TextItemText>{item.rateSell.toFixed(2)}</TextItemText>
            </TextItem>
          ))
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              fontSize: '20px',
              color: '#fff',
              textAlign: 'center',
            }}
          >
            {t("Currency Not Found!")}{' '}
          </div>
        )}
      </TextList>
      <Background></Background>
    </Table>
  );
};

export default Currency;
