import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneEyeRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneEyeRegularIcon',
  component: StandaloneEyeRegularIcon,
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
} satisfies Meta<typeof StandaloneEyeRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneEyeRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
