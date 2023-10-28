import type { Meta, StoryObj } from '@storybook/react';

import { FlagBotswanaIcon } from '../src/react/Flags';

const meta = {
  title: 'Flags/FlagBotswanaIcon',
  component: FlagBotswanaIcon,
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
} satisfies Meta<typeof FlagBotswanaIcon>;

export default meta;

type Story = StoryObj<typeof FlagBotswanaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
