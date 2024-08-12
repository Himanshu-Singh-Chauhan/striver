import PropTypes from "prop-types";
import { useEffect, useState } from "react";

Countdown.propTypes = {
  targetDate: PropTypes.string.isRequired,
};

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <CountdownItem value={days} label="days" />
      <CountdownItem value={hours} label="hours" />
      <CountdownItem value={minutes} label="min" />
      <CountdownItem value={seconds} label="sec" />
    </div>
  );
}

CountdownItem.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

function CountdownItem({ value, label }) {
  return (
    <div className="flex flex-col p-2 bg-pink-300 rounded-xl text-gray-900">
      <span className="countdown font-mono text-5xl">
        <span style={{ "--value": value }}>{value}</span>
      </span>
      {label}
    </div>
  );
}
