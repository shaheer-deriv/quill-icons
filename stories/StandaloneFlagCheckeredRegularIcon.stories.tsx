import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneFlagCheckeredRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneFlagCheckeredRegularIcon',
  component: StandaloneFlagCheckeredRegularIcon,
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
} satisfies Meta<typeof StandaloneFlagCheckeredRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneFlagCheckeredRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
