import type { Meta, StoryObj } from '@storybook/react';

import { DarkTwentyFourSevenSupportIcon } from '../src/react/Illustration';

const meta = {
  title: 'Illustrations/DarkTwentyFourSevenSupportIcon',
  component: DarkTwentyFourSevenSupportIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DarkTwentyFourSevenSupportIcon>;

export default meta;

type Story = StoryObj<typeof DarkTwentyFourSevenSupportIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
