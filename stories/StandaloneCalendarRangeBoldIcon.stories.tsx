import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCalendarRangeBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCalendarRangeBoldIcon',
  component: StandaloneCalendarRangeBoldIcon,
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
} satisfies Meta<typeof StandaloneCalendarRangeBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCalendarRangeBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
