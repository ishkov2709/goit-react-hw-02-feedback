import { BtnList, ItemBtn, Btn } from './FeedbackOptions.styled';
import customizeText from 'utils/customizeText';

const FeedbackOptions = props => {
  const { options, onLeaveFeedback } = props;
  return (
    <>
      <BtnList>
        {Object.keys(options).map(el => {
          return (
            el !== 'total' &&
            el !== 'positiveFeedback' && (
              <ItemBtn key={el}>
                <Btn type="button" name={el} onClick={onLeaveFeedback}>
                  {customizeText(el)}
                </Btn>
              </ItemBtn>
            )
          );
        })}
      </BtnList>
    </>
  );
};

export default FeedbackOptions;
