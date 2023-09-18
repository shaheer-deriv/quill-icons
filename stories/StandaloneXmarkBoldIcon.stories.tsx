import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneXmarkBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneXmarkBoldIcon',
  component: StandaloneXmarkBoldIcon,
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
} satisfies Meta<typeof StandaloneXmarkBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneXmarkBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
