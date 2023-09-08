import type { Meta, StoryObj } from '@storybook/react';

import { FlagLithuaniaIcon } from '../src/react/flags';

const meta = {
  title: 'flags/FlagLithuaniaIcon',
  component: FlagLithuaniaIcon,
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
} satisfies Meta<typeof FlagLithuaniaIcon>;

export default meta;

type Story = StoryObj<typeof FlagLithuaniaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
