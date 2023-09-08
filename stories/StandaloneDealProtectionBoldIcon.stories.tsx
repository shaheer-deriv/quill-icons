import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneDealProtectionBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneDealProtectionBoldIcon',
  component: StandaloneDealProtectionBoldIcon,
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
} satisfies Meta<typeof StandaloneDealProtectionBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneDealProtectionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
