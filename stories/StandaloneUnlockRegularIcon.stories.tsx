import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneUnlockRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneUnlockRegularIcon',
  component: StandaloneUnlockRegularIcon,
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
} satisfies Meta<typeof StandaloneUnlockRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneUnlockRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
