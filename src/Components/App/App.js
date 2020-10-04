import React, { Component } from "react";
import style from "./App.module.css";
import Statistics from "../Statistics/Statictics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions ";
import Section from "../Section/Section";
import Notification from "../Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    netural: 0,
    bad: 0,
  };
  handleIncrement = (e) => {
    const feedbackName = e.target.name;
    if (feedbackName === undefined) {
      return;
    }
    this.setState((prevState) => ({
      [feedbackName]: prevState[feedbackName] + 1,
    }));
  };
  countTotalFeedback = () => {
    const valuesState = Object.values(this.state);
    const total = valuesState.reduce((acc, value) => (acc += value));
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const goodVoice = this.state.good;
    const totalVoice = this.countTotalFeedback();
    let percentage = 0;
    if (goodVoice || totalVoice !== 0) {
      percentage = Math.round((goodVoice / totalVoice) * 100);
    }
    return percentage;
  };

  render() {
    const { good, netural, bad } = this.state;
    const { container } = style;
    const totalFeedback = this.countTotalFeedback();
    const objKey = { good, netural, bad }
    return (
      <>
        <section className={container}>
          <Section title={"Please leave feedback"}>
            <FeedbackOptions
              options={objKey}
              onLeaveFeedback={this.handleIncrement}
            />
          </Section>
          {totalFeedback > 0 ? (
            <Section title="Statistics">
              <Statistics
                good={good}
                netural={netural}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            </Section>
          ) : (
            <Notification message="No feedback given" />
          )}
        </section>
      </>
    );
  }
}
export default App;
