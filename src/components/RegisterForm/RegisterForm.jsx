import  React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import PasswordStrength from './PasswordStrength'
import { Btn, Button , Container, Logotype, Icon, FormaRegistration, Error, Label} from "../LoginForm/LoginForm.styled";
import { signup } from '../../redux/auth/auth-operations'
import { Formik } from 'formik'
import { singupSchema } from '../../utils'
import sprite from '../../images/svg/sprite.svg'
import { Visibility, VisibilityOff, Lock, AccountBox } from '@mui/icons-material';
import { HiEnvelope } from "react-icons/hi2";
import { styled, IconButton, TextField } from '@mui/material';
import { useTranslation, Trans } from 'react-i18next';


const RegisterForm = () => {
  const { t } = useTranslation();

  const initialValues = {
    name: "",
    password: "",
    confirmPassword: "",
    email: "",
  }
  
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = ({ name, email, password }) => {
    
    dispatch(signup({ name, email, password }));
  };
  //const tooglePassword = () => { setShowPassword(!showPassword) }
  const tooglePassword = useCallback(() => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  }, []);
  const handleMouseDownPassword = e => {
    e.preventDefault();
  }
  
  return (
    <Container>
      <Logotype>
        <Icon>
          <use href={`${sprite}#icon-logo`}></use>
        </Icon>
      </Logotype>

      <Formik
        initialValues={initialValues}
        validateOnBlur
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}
        validationSchema={singupSchema}
        validateOnChange={false}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          dirty,
        }) => (
          <FormaRegistration>
            <Label>
              {touched.email && errors.email && (
                <Trans>
                  <Error>{errors.email}</Error>
                </Trans>
              )}
              <StyledTextField
                type="email"
                name="email"
                variant="filled"
                margin="normal"
                required
                fullWidth
                placeholder={t("email")}
                size="small"
                autoComplete="email"
                color="primary"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                InputProps={{ disableUnderline: true }}
              />
              <HiEnvelope
                style={{ position: 'absolute', left: '15px', bottom: '48px', color: '#E0E0E0', }}
                size="23px"
              />
            </Label>

            <Label>
              {touched.password && errors.password && (
                <Trans>
                  <Error>{errors.password}</Error>
                </Trans>
              )}
              <StyledTextField
                type={showPassword ? 'text' : 'password'}
                placeholder={t("password")}
                name="password"
                fullWidth
                variant="filled"
                margin="normal"
                size="small"
                autoComplete="current-password"
                color="primary"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                InputProps={{ disableUnderline: true }}
              />
              <Lock
                sx={{ position: 'absolute', left: '15px', bottom: '48px', color: '#E0E0E0', }}
              />
              <IconButton
                aria-label="toggle password visibility"
                sx={{ position: 'absolute', right: '0', color: '#E0E0E0', }}
                onClick={tooglePassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </Label>

            <Label>
              {touched.confirmPassword && errors.confirmPassword && (
                <Trans>
                  <Error>{errors.confirmPassword}</Error>
                </Trans>
              )}
              <StyledTextField
                placeholder={t("ConfirmPassword")}
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                fullWidth
                variant="filled"
                margin="normal"
                size="small"
                required
                autoComplete="current-password"
                color="primary"
                onChange={handleChange}
                onBlur={handleBlur}
                InputProps={{ disableUnderline: true }}
                value={values.confirmPassword}
                style={{ marginBottom: "4px" }}
              />
              <Lock
                sx={{ position: 'absolute', left: '15px', bottom: '12px', color: '#E0E0E0', }}
              />
              <IconButton
                aria-label="toggle password visibility"
                sx={{ position: 'absolute', right: '0', color: '#E0E0E0', }}
                onClick={tooglePassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </Label>

            <PasswordStrength password={values.password} />
            <Label>
              {touched.name && errors.name && (
                <Trans>
                  <Error >{errors.name}</Error>
                </Trans>
              )}
              <StyledTextField
                placeholder={t("firstName")}
                type="text"
                name="name"
                required
                fullWidth
                autoComplete="name"
                autoFocus
                variant="filled"
                margin="normal"
                color="primary"
                size="small"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                InputProps={{ disableUnderline: true }}
              />
              <AccountBox
                style={{ position: 'absolute', left: '15px', bottom: '48px', color: '#E0E0E0', }}
              />
            </Label>
            <Btn
              disabled={!isValid || !dirty}
              type="submit"
            >
              {t("register")}
            </Btn>
            <Button
              to="/login"
              style={{ textDecoration: "none" }}
            >
              {t("login")}
            </Button>
          </FormaRegistration>
        )}
      </Formik>
    </Container>
  )
};

const StyledTextField = styled(TextField)({
  width: '280px',
  margin: '0 0 40px',

  '@media screen and (min-width: 768px)': {
    width: '100%',
  },

  '& .MuiFilledInput-root': {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottom: '1px solid #E0E0E0',
    padding: '0',
  },

  '& .Mui-focused .MuiFilledInput-root': {
    backgroundColor: '#fff',
  },

  '& .MuiFilledInput-input': {
    padding: '8px 40px 8px 54px',
  },
});

export default RegisterForm





























 