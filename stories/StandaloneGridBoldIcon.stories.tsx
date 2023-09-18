import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneGridBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneGridBoldIcon',
  component: StandaloneGridBoldIcon,
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
} satisfies Meta<typeof StandaloneGridBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneGridBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
