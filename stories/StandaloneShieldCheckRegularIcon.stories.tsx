import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneShieldCheckRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneShieldCheckRegularIcon',
  component: StandaloneShieldCheckRegularIcon,
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
} satisfies Meta<typeof StandaloneShieldCheckRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneShieldCheckRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
