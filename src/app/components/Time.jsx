"use client";
import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return {
        days,
        hours,
        minutes,
        seconds,
      };
    } else {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="py-2">
      <div className="flex flex-wrap gap-2 ">
        <span className="border p-2 md:p-4 text-sm md:text-2xl font-bold text-white bg-blue-400">
          {timeLeft.days} D
        </span>
        <span className="border p-2 md:p-4 text-sm md:text-2xl font-bold text-white bg-blue-400">
          {timeLeft.hours} H
        </span>
        <span className="border p-2 md:p-4 text-sm md:text-2xl font-bold text-white bg-blue-400">
          {timeLeft.minutes} M
        </span>
        <span className="border p-2 md:p-4 text-sm md:text-2xl font-bold text-white bg-blue-400">
          {timeLeft.seconds} S
        </span>
      </div>
    </div>
  );
};

export default CountdownTimer;
