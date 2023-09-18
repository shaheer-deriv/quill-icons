import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneStarFillIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneStarFillIcon',
  component: StandaloneStarFillIcon,
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
} satisfies Meta<typeof StandaloneStarFillIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneStarFillIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
