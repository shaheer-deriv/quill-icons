import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneXmarkRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneXmarkRegularIcon',
  component: StandaloneXmarkRegularIcon,
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
} satisfies Meta<typeof StandaloneXmarkRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneXmarkRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
