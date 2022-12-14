import { ErrorMessage, Formik } from 'formik';
import { useState } from 'react';
import moment from 'moment';
import { toast } from 'react-toastify';
import {
  addTransaction,
  fetchTransactions,
} from '../../redux/transactions/transactions-operation';
import * as Yup from 'yup';
import {
  CheckboxContainter,
  CheckboxField,
  MoneyText,
  StyledForm,
  TextField,
  TabletWrapper,
} from './AddTransactionForm.styled';
import { Comment } from 'components/AddTransactionForm/Comment/Comment';
import { DatePicker } from './DatePicker/DatePicker';
import CategorySelect from './CategorySelect/CategorySelect';
import { StyledButton } from '../ModalAddTransaction/StyledButton/StyledButton';
import { useDispatch } from 'react-redux';
import { CalendarIcon } from './DatePicker/DatePicker.styled';
import { useTranslation } from 'react-i18next';

export const AddTransactionForm = ({ toggleModal }) => {
  const { t } = useTranslation();

  moment.updateLocale('uk');

  const [transactionType, setTransactonType] = useState('income');

  const isIncomeHandler = e => {
    let isChecked = e.target.checked;
    isChecked ? setTransactonType('expense') : setTransactonType('income');
  };

  const dispatch = useDispatch();
  const initialDate = moment().utc();
  const initialValues = {
    date: initialDate,
    amount: '',
    category: 'none',
    comment: '',
  };

  const addTrasactionSchema = Yup.object().shape({
    category: Yup.string(),
    amount: Yup.number().required(),
    date: Yup.date().required(),
    comment: Yup.string().max(50),
  });

  const handleSubmit = async ({ category, ...rest }, actions) => {
    let result =
      transactionType === 'expense'
        ? { transactionType, category, ...rest }
        : { transactionType, ...rest };

    try {
      await dispatch(addTransaction(result));
      await dispatch(fetchTransactions());
      toggleModal();
    } catch (error) {
      toast.error`${error.message}`;
    }
    actions.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={addTrasactionSchema}
      >
        <StyledForm autoComplete="off">
          <label htmlFor="transactionType">
            <CheckboxContainter>
              <MoneyText
                style={
                  transactionType === 'income'
                    ? { color: '#24cca7' }
                    : { color: '#E0E0E0' }
                }
              >
                {t("income")}
              </MoneyText>
              <CheckboxField
                type="checkbox"
                name="transactionType"
                onChange={e => isIncomeHandler(e)}
                value={transactionType}
              />

              <MoneyText
                style={
                  transactionType === 'expense'
                    ? { color: '#FF6596' }
                    : { color: '#E0E0E0' }
                }
              >
                {t("expenses")}
              </MoneyText>
            </CheckboxContainter>
          </label>
          {transactionType === 'expense' ? (
            <label htmlFor="category">
              <CategorySelect name="category" />
            </label>
          ) : (
            ''
          )}
          <TabletWrapper>
            <label htmlFor="amount">
              <TextField type="number" name="amount" placeholder="0.00" />
              <ErrorMessage
                name="amount"
                render={msg => {
                  toast.error(`${msg}`, { toastId: String(new Date()) });
                }}
              />
            </label>
            <label htmlFor="date" style={{ position: 'relative' }}>
              <DatePicker name="date" />
              <CalendarIcon />
              <ErrorMessage
                name="date"
                render={msg => {
                  toast.error(`${msg}`, { toastId: String(new Date()) });
                }}
              />
            </label>
          </TabletWrapper>
          <label htmlFor="comment">
            <Comment name="comment" placeholder={t("comment")} minRows={4} />
          </label>
          <StyledButton type="submit">{t("addTransaction")}</StyledButton>
        </StyledForm>
      </Formik>
    </>
  );
};
