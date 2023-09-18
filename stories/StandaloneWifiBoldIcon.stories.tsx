import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneWifiBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneWifiBoldIcon',
  component: StandaloneWifiBoldIcon,
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
} satisfies Meta<typeof StandaloneWifiBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneWifiBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
