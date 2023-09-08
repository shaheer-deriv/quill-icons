import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneSignalBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneSignalBoldIcon',
  component: StandaloneSignalBoldIcon,
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
} satisfies Meta<typeof StandaloneSignalBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneSignalBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
