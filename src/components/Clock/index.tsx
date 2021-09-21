import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { ClockContainer, TimeWrapper } from './styles';

interface TimerProps {
  type: 'deadline' | 'duration',
  date: string;
}

export type ClockProps = {
  /**
   * 倒计时
   */
  type: 'timer';
  timer: TimerProps;
  title?: string;
}

const DAY = 3600 * 24;
const HOUR = 3600;
const MIN = 60;

const Timer = (props: TimerProps) => {
  const { type, date } = props;

  const [day, setDay] = useState<number>(0);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  useEffect(() => {
    let timer: number | null = null;
    if (type === 'deadline') {
      let duration = parseInt(dayjs(date).diff(dayjs()) / 1000 + '');
      let tday = parseInt(duration / DAY + '');
      duration %= DAY;
      let thour = parseInt(duration / HOUR + '');
      duration %= HOUR;
      let tmin = parseInt(duration / MIN + '');
      duration %= MIN;
      let tsec = duration;
      setSec(tsec);
      setMin(tmin);
      setHour(thour);
      setDay(tday);

      timer = setInterval(() => {
        let brow = false;
        if (tsec > 0) {
          setSec(tsec -= 1);
        } else {
          setSec(tsec = 59);
          brow = true;
        }

        if (brow && tmin > 0) {
          setMin(tmin -= 1);
          brow = false;
        } else if (brow) {
          setMin(tmin = 59);
        }

        if (brow && thour > 0) {
          setHour(thour -= 1);
          brow = false;
        } else if (brow) {
          setHour(thour = 59);
        }

        if (brow && tday > 0) {
          setDay(tday -= 1);
        } else if (brow) {
          timer && clearInterval(timer);
        }
      }, 1000);
    }

    return () => {
      timer && clearInterval(timer);
    };
  }, [date, type]);


  return (
    <div className="clock">
      {[
        { value: day, name: '天', color: 'orange' },
        { value: hour, name: '时', color: 'purple' },
        { value: min, name: '分', color: 'green' },
        { value: sec, name: '秒', color: 'purple' },
      ].map(({ value, name, color }) => {
        return (
          <TimeWrapper className={color} key={`${value}${name}`}>
            <div className="time-value">{value}</div>
            <div className="time-name">
              <div>{name}</div>
            </div>
          </TimeWrapper>
        );
      })}
    </div>
  );
};

export const Clock = (props: ClockProps) => {
  const { type, title, timer } = props;
  return (
    <ClockContainer>
      {title && (
        <div className="clock-title">
          <div>{title}</div>
        </div>
      )}
      {type === 'timer' && <Timer {...timer} />}
    </ClockContainer>
  );
};
