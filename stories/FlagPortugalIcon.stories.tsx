import type { Meta, StoryObj } from '@storybook/react';

import { FlagPortugalIcon } from '../src/react/Flags';

const meta = {
  title: 'Flags/FlagPortugalIcon',
  component: FlagPortugalIcon,
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
} satisfies Meta<typeof FlagPortugalIcon>;

export default meta;

type Story = StoryObj<typeof FlagPortugalIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
