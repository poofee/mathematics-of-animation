import React from 'react';
import { Slide, SlideSet, Link } from 'spectacle';

import { Text, Heading } from 'components';

export const outroSlides = (
  <SlideSet>
    <Slide>
      <Heading
        bgColor="white"
        textColor="primary"
        fw={5}
        margin="0 0 4rem 0"
        padding="1rem"
      >
        Thank You!
      </Heading>
      <Text textSize="3rem" className="fw9">
        Varun Vachhar
      </Text>
      <Text textSize="2.25rem">@winkerVSbecks</Text>
      <Text margin="4rem 0 0 0" textSize="2.25rem">
        <Link href="https://tiny.cc/webpack-dragon" textColor="secondary">
          tiny.cc/webpack-dragon
        </Link>
      </Text>
    </Slide>
    <Slide>__Credits__</Slide>
  </SlideSet>
);
