import { useState } from "react";
import Section from "./Section";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round(good / countTotalFeedback() * 100);
  };

  const onLeaveFeedback = event => {
    switch (event) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return new Error(`State doesn't exist`);
    }
  };


  return (
    <div>
      <Section
        title={'Please leave feedback'}
      >
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onBtnClick={onLeaveFeedback}
        />
      </Section>
      <Section
        title={'Statistics'}
      >
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />) : 'No feedback given'
        }
      </Section>

    </div>
  );
};