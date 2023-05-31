import { StatList, StatItem, NotificationMessage } from './Statistics.styled';
import customizeText from 'utils/customizeText';

export const Statistics = props => {
  const { total, message } = props;
  return (
    <>
      {total > 0 ? (
        <StatList>
          {Object.keys(props).map(el => {
            return el !== 'message' ? (
              <StatItem key={el}>
                {customizeText(el)}: {props[el]}
              </StatItem>
            ) : (
              ''
            );
          })}
        </StatList>
      ) : (
        <NotificationMessage>{message}</NotificationMessage>
      )}
    </>
  );
};

export default Statistics;
