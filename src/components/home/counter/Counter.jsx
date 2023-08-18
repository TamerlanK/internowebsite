import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

import "./counter.css";
import Container from "../../Container";

const countData = [
  { id: 1, title: "Years Of Experience", number: 12 },
  { id: 2, title: "Success Project", number: 85 },
  { id: 3, title: "Active Project", number: 15 },
  { id: 4, title: "Happy Customers", number: 95 },
];

const CounterItem = ({ title, number }) => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="home__counter-item" ref={inViewRef}>
      {inView ? (
        <>
          <h5>
            <CountUp start={0} end={number} duration={3} />
          </h5>
          <p>{title}</p>
        </>
      ) : (
        <h5>0</h5>
      )}
    </div>
  );
};

const Counter = () => {
  return (
    <div className="home__counter-wrapper">
      <Container>
        <div className="home__counter-inner">
          {countData.map(({ id, title, number }) => (
            <CounterItem key={id} title={title} number={number} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Counter;
