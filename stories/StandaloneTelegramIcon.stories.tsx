import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneTelegramIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneTelegramIcon',
  component: StandaloneTelegramIcon,
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
} satisfies Meta<typeof StandaloneTelegramIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneTelegramIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
