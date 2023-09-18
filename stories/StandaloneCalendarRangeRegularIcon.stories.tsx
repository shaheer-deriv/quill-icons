import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCalendarRangeRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCalendarRangeRegularIcon',
  component: StandaloneCalendarRangeRegularIcon,
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
} satisfies Meta<typeof StandaloneCalendarRangeRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCalendarRangeRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
