import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneArrowLeftToLineBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneArrowLeftToLineBoldIcon',
  component: StandaloneArrowLeftToLineBoldIcon,
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
} satisfies Meta<typeof StandaloneArrowLeftToLineBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneArrowLeftToLineBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
