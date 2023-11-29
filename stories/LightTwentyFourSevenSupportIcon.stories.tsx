import type { Meta, StoryObj } from '@storybook/react';

import { LightTwentyFourSevenSupportIcon } from '../src/react/Illustration';

const meta = {
  title: 'Illustrations/LightTwentyFourSevenSupportIcon',
  component: LightTwentyFourSevenSupportIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LightTwentyFourSevenSupportIcon>;

export default meta;

type Story = StoryObj<typeof LightTwentyFourSevenSupportIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
