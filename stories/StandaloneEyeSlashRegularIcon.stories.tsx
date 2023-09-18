import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneEyeSlashRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneEyeSlashRegularIcon',
  component: StandaloneEyeSlashRegularIcon,
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
} satisfies Meta<typeof StandaloneEyeSlashRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneEyeSlashRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
