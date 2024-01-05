import type { Meta, StoryObj } from '@storybook/react';

import { LightTwentyFourHoursTradingIcon } from '../src/react/Illustration';

const meta = {
  title: 'Illustrations/LightTwentyFourHoursTradingIcon',
  component: LightTwentyFourHoursTradingIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LightTwentyFourHoursTradingIcon>;

export default meta;

type Story = StoryObj<typeof LightTwentyFourHoursTradingIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
