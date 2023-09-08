import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneSquareMinusRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneSquareMinusRegularIcon',
  component: StandaloneSquareMinusRegularIcon,
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
} satisfies Meta<typeof StandaloneSquareMinusRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneSquareMinusRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
