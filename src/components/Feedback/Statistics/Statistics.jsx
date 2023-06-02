import { StatList, StatItem, NotificationMessage } from './Statistics.styled';
import customizeText from 'utils/customizeText';
import PropTypes from 'prop-types';

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

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
  message: PropTypes.string,
};
