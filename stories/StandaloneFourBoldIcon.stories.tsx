import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneFourBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneFourBoldIcon',
  component: StandaloneFourBoldIcon,
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
} satisfies Meta<typeof StandaloneFourBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneFourBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
