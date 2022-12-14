import { ModalWindow, Overlay } from './ModalAddTransaction.styled';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { StyledButton } from 'components/ModalAddTransaction/StyledButton/StyledButton';
import { AddTransactionForm } from '../AddTransactionForm/AddTransactionForm';
import { Heading } from './ModalAddTransaction.styled';
import { StyledCloseButton } from './CloseButton/CloseButton';
import { useTranslation } from 'react-i18next';

export const ModalAddTransaction = ({ toggleModal, isOpen }) => {
  const modalRoot = document.querySelector('#modal-root');

  const { t } = useTranslation();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, toggleModal]);

  return createPortal(
    <Overlay>
      <ModalWindow>
        <Heading>{t("addTransaction")}</Heading>

        <AddTransactionForm toggleModal={toggleModal} />
        <StyledButton type="button" onClick={toggleModal}>
          {t("cancel")}
        </StyledButton>
        <StyledCloseButton type="button" onClick={toggleModal} />
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};
