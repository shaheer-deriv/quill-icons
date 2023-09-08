import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneUsersBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneUsersBoldIcon',
  component: StandaloneUsersBoldIcon,
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
} satisfies Meta<typeof StandaloneUsersBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneUsersBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
