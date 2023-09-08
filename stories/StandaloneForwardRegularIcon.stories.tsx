import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneForwardRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneForwardRegularIcon',
  component: StandaloneForwardRegularIcon,
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
} satisfies Meta<typeof StandaloneForwardRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneForwardRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
