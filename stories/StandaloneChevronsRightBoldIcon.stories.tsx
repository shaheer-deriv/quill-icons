import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneChevronsRightBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneChevronsRightBoldIcon',
  component: StandaloneChevronsRightBoldIcon,
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
} satisfies Meta<typeof StandaloneChevronsRightBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneChevronsRightBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
