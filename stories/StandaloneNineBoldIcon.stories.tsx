import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneNineBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneNineBoldIcon',
  component: StandaloneNineBoldIcon,
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
} satisfies Meta<typeof StandaloneNineBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneNineBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
