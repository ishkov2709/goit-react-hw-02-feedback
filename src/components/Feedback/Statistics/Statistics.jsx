import { StatList, StatItem, NotificationMessage } from './Statistics.styled';
import customizeText from 'utils/customizeText';

export const Statistics = props => {
  const { total, message } = props;
  return (
    <>
      <StatList>
        {total > 0 ? (
          Object.keys(props).map(el => {
            if (el === 'statTitle' || el === 'message') return;
            return (
              <StatItem key={el}>
                {customizeText(el)}: {props[el]}
              </StatItem>
            );
          })
        ) : (
          <NotificationMessage>{message}</NotificationMessage>
        )}
      </StatList>
    </>
  );
};

export default Statistics;
