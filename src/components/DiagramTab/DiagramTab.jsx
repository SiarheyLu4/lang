import Chart from '../Chart/Chart';
import Table from '../Table/Table';

import { Container, ChartWrapper, Title } from './DiagramTab.styled';
import { useTranslation } from 'react-i18next';

const DiagramTab = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <ChartWrapper>
        <Title>{t("Statistics")}</Title>
        <Chart />
      </ChartWrapper>
      <Table />
    </Container>
  );
}

export default DiagramTab;