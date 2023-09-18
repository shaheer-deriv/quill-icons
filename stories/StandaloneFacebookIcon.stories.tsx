import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneFacebookIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneFacebookIcon',
  component: StandaloneFacebookIcon,
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
} satisfies Meta<typeof StandaloneFacebookIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneFacebookIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
