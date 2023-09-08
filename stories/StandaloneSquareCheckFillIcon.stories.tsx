import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneSquareCheckFillIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneSquareCheckFillIcon',
  component: StandaloneSquareCheckFillIcon,
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
} satisfies Meta<typeof StandaloneSquareCheckFillIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneSquareCheckFillIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
