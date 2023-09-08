import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneIosIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneIosIcon',
  component: StandaloneIosIcon,
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
} satisfies Meta<typeof StandaloneIosIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneIosIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
