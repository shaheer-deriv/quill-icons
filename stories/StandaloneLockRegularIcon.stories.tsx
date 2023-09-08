import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneLockRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneLockRegularIcon',
  component: StandaloneLockRegularIcon,
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
} satisfies Meta<typeof StandaloneLockRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneLockRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
