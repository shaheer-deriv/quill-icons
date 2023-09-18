import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCalendarBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCalendarBoldIcon',
  component: StandaloneCalendarBoldIcon,
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
} satisfies Meta<typeof StandaloneCalendarBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCalendarBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
