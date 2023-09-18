import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneLifeRingBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneLifeRingBoldIcon',
  component: StandaloneLifeRingBoldIcon,
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
} satisfies Meta<typeof StandaloneLifeRingBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneLifeRingBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
