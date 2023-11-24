import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneTrustpilotIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneTrustpilotIcon',
  component: StandaloneTrustpilotIcon,
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
} satisfies Meta<typeof StandaloneTrustpilotIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneTrustpilotIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
