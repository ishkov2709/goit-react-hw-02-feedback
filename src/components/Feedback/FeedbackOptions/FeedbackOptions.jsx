import { BtnList, ItemBtn, Btn } from './FeedbackOptions.styled';
import customizeText from 'utils/customizeText';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <BtnList>
        {options.map(option => {
          return (
            <ItemBtn key={option}>
              <Btn
                type="button"
                name={option}
                onClick={() => {
                  onLeaveFeedback(option);
                }}
              >
                {customizeText(option)}
              </Btn>
            </ItemBtn>
          );
        })}
      </BtnList>
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
