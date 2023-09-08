import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneFlagCheckeredBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneFlagCheckeredBoldIcon',
  component: StandaloneFlagCheckeredBoldIcon,
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
} satisfies Meta<typeof StandaloneFlagCheckeredBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneFlagCheckeredBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
