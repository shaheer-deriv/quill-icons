import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleCalendarBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleCalendarBoldIcon',
  component: StandaloneCircleCalendarBoldIcon,
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
} satisfies Meta<typeof StandaloneCircleCalendarBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleCalendarBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
