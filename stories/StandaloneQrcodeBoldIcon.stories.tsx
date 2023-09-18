import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneQrcodeBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneQrcodeBoldIcon',
  component: StandaloneQrcodeBoldIcon,
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
} satisfies Meta<typeof StandaloneQrcodeBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneQrcodeBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
