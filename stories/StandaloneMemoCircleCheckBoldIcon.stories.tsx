import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneMemoCircleCheckBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneMemoCircleCheckBoldIcon',
  component: StandaloneMemoCircleCheckBoldIcon,
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
} satisfies Meta<typeof StandaloneMemoCircleCheckBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneMemoCircleCheckBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
