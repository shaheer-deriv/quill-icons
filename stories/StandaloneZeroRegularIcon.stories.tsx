import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneZeroRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneZeroRegularIcon',
  component: StandaloneZeroRegularIcon,
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
} satisfies Meta<typeof StandaloneZeroRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneZeroRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
