import type { Meta, StoryObj } from '@storybook/react';

import { FlagSouthAfricaIcon } from '../src/react/flags';

const meta = {
  title: 'flags/FlagSouthAfricaIcon',
  component: FlagSouthAfricaIcon,
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
} satisfies Meta<typeof FlagSouthAfricaIcon>;

export default meta;

type Story = StoryObj<typeof FlagSouthAfricaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
