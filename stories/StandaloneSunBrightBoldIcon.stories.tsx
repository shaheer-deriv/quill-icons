import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneSunBrightBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneSunBrightBoldIcon',
  component: StandaloneSunBrightBoldIcon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fill: { control: { type: 'color' } },
    iconSize: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      defaultValue: 'md',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StandaloneSunBrightBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneSunBrightBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
