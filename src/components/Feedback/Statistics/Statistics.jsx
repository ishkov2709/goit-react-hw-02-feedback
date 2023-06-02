import { StatList, StatItem } from './Statistics.styled';
import customizeText from 'utils/customizeText';
import PropTypes from 'prop-types';

export const Statistics = props => {
  return (
    <>
      <StatList>
        {Object.keys(props).map(el => {
          return (
            <StatItem key={el}>
              {customizeText(el)}: {props[el]}
            </StatItem>
          );
        })}
      </StatList>
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
};
