import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneIpadosIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneIpadosIcon',
  component: StandaloneIpadosIcon,
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
} satisfies Meta<typeof StandaloneIpadosIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneIpadosIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
