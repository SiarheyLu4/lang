import { AddButton } from "./AddTransactionButton.styled";
import { useTranslation } from "react-i18next";

export const AddTransactionButton = ({ type }) => {
  const { t } = useTranslation();

  return <AddButton type={type}>{t("addTransaction")}</AddButton>;
};
