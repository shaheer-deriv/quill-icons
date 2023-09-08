import type { Meta, StoryObj } from '@storybook/react';

import { FlagSwitzerlandIcon } from '../src/react/flags';

const meta = {
  title: 'flags/FlagSwitzerlandIcon',
  component: FlagSwitzerlandIcon,
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
} satisfies Meta<typeof FlagSwitzerlandIcon>;

export default meta;

type Story = StoryObj<typeof FlagSwitzerlandIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
