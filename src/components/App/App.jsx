import { useState } from 'react';

import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notify } from 'components/Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // const state = ['good', 'neutral', 'bad'];

  const options = {
    good: setGood,
    neutral: setNeutral,
    bad: setBad,
  };

  const onLeaveFeedback = event => {
    options[event](prev => prev + 1);
    //OR
    // switch (event) {
    //   case 'good':
    //     setGood(good + 1);
    //     break;
    //   case 'neutral':
    //     setNeutral(neutral + 1);
    //     break;
    //   case 'bad':
    //     setBad(bad + 1);
    //     break;

    //   default:
    //     return alert('🐷 something went wrong please try again');
    // }

    // this.setState(prevState => ({ [state]: prevState[state] + 1 }));
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title={'Please leave your feedback✍️'}>
        <FeedbackOptions
          state={Object.keys(options)}
          onLeaveFeedback={onLeaveFeedback}
        />
        {countTotalFeedback() <= 0 ? (
          <Notify message={'There is no feedback🍓'} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </>
  );
};
