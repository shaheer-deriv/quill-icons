import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCheckRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCheckRegularIcon',
  component: StandaloneCheckRegularIcon,
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
} satisfies Meta<typeof StandaloneCheckRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCheckRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
