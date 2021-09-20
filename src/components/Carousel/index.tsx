import React, { useCallback, useState } from 'react';
import { iconMap } from '../../assets/imgs/icons';
import { Container, ControlButton, Picture, Pictures } from './styles';

export interface CarouselProps {
  paths: string[];
  interval?: number;
}

export const Carousel = (props: CarouselProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { paths, interval = 1500 } = props;
  const [index, setIndex] = useState<number>(0);

  const handleClickLeft = useCallback(() => {
    index >= paths.length - 1 ? setIndex(0) : setIndex(index + 1);
  }, [index, paths]);

  const handleClickRight = useCallback( () => {
    index >= paths.length - 1 ? setIndex(0) : setIndex(index + 1);
  }, [index, paths]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const timer = setInterval(() => {
  //   index >= paths.length - 1 ? setIndex(0) : setIndex(index + 1);
  // }, interval);

  return (
    <Container>
      <ControlButton onClick={handleClickLeft} className="control left" src={iconMap['arrow_left']} />
      <ControlButton onClick={handleClickRight} className="control right" src={iconMap['arrow_left']} right />
      <Pictures>
        <div style={{ marginLeft: `${index === 0 ? 0 : `-${index}00%`}`, width: `${paths.length}00%` }}>
          {paths.map((item) => {
            return <Picture key={item}><img alt="banner" src={item} /></Picture>;
          })}
        </div>
      </Pictures>
    </Container>
  );
};
