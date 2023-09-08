import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneFiatOfframpBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneFiatOfframpBoldIcon',
  component: StandaloneFiatOfframpBoldIcon,
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
} satisfies Meta<typeof StandaloneFiatOfframpBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneFiatOfframpBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
