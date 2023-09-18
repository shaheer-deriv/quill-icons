import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneBarcodeBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneBarcodeBoldIcon',
  component: StandaloneBarcodeBoldIcon,
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
} satisfies Meta<typeof StandaloneBarcodeBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneBarcodeBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
