import type { Meta, StoryObj } from '@storybook/react';

import { FlagUsaIcon } from '../src/react/flags';

const meta = {
  title: 'flags/FlagUsaIcon',
  component: FlagUsaIcon,
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
} satisfies Meta<typeof FlagUsaIcon>;

export default meta;

type Story = StoryObj<typeof FlagUsaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
