import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneSquareRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneSquareRegularIcon',
  component: StandaloneSquareRegularIcon,
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
} satisfies Meta<typeof StandaloneSquareRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneSquareRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
