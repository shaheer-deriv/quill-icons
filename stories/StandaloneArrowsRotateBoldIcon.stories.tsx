import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneArrowsRotateBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneArrowsRotateBoldIcon',
  component: StandaloneArrowsRotateBoldIcon,
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
} satisfies Meta<typeof StandaloneArrowsRotateBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneArrowsRotateBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
