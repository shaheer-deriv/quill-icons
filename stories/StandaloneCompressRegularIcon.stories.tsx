import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCompressRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneCompressRegularIcon',
  component: StandaloneCompressRegularIcon,
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
} satisfies Meta<typeof StandaloneCompressRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCompressRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
