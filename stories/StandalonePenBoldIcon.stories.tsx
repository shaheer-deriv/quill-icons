import type { Meta, StoryObj } from '@storybook/react';

import { StandalonePenBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandalonePenBoldIcon',
  component: StandalonePenBoldIcon,
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
} satisfies Meta<typeof StandalonePenBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandalonePenBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
