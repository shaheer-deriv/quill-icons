import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneTiktokIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneTiktokIcon',
  component: StandaloneTiktokIcon,
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
} satisfies Meta<typeof StandaloneTiktokIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneTiktokIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
