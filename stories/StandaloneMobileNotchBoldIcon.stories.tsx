import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneMobileNotchBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneMobileNotchBoldIcon',
  component: StandaloneMobileNotchBoldIcon,
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
} satisfies Meta<typeof StandaloneMobileNotchBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneMobileNotchBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
