import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneVideoRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneVideoRegularIcon',
  component: StandaloneVideoRegularIcon,
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
} satisfies Meta<typeof StandaloneVideoRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneVideoRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
