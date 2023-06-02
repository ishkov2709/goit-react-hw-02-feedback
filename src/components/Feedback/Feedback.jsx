import React from 'react';
import { Wrapper, NotificationMessage } from './Feedback.styled';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((total, value) => {
      return total + value;
    }, 0);
  }

  countPositiveFeedbackPercentage = total => {
    return `${Math.round((this.state.good / total) * 100)}%`;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const res = this.countPositiveFeedbackPercentage(total);
    return (
      <Wrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={res}
            />
          ) : (
            <NotificationMessage>There is no feedback</NotificationMessage>
          )}
        </Section>
      </Wrapper>
    );
  }
}

export default Feedback;
