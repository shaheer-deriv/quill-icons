import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneBarsRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneBarsRegularIcon',
  component: StandaloneBarsRegularIcon,
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
} satisfies Meta<typeof StandaloneBarsRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneBarsRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
