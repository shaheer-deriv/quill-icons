import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneHuaweiIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneHuaweiIcon',
  component: StandaloneHuaweiIcon,
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
} satisfies Meta<typeof StandaloneHuaweiIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneHuaweiIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
