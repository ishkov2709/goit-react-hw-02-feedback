import React from 'react';
import { Wrapper } from './Feedback.styled';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };

  leaveFeedbackHendler = e => {
    const nameBtn = e.target.name;
    this.setState(prevState => {
      return { [nameBtn]: prevState[nameBtn] + 1 };
    });
    this.countTotalFeedback();
  };

  countTotalFeedback() {
    this.setState(prevState => {
      return {
        total: prevState.total + 1,
      };
    });
  }

  countPositiveFeedbackPercentage = (good, total) => {
    return `${Math.round((good / total) * 100)}%`;
  };

  render() {
    const { good, neutral, bad, total } = this.state;
    const res = this.countPositiveFeedbackPercentage(
      this.state.good,
      this.state.total
    );
    return (
      <Wrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.leaveFeedbackHendler}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={res}
            message="There is no feedback"
          />
        </Section>
      </Wrapper>
    );
  }
}

export default Feedback;
