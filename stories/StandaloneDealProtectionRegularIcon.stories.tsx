import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneDealProtectionRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneDealProtectionRegularIcon',
  component: StandaloneDealProtectionRegularIcon,
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
} satisfies Meta<typeof StandaloneDealProtectionRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneDealProtectionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
