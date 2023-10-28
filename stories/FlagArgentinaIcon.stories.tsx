import type { Meta, StoryObj } from '@storybook/react';

import { FlagArgentinaIcon } from '../src/react/Flags';

const meta = {
  title: 'Flags/FlagArgentinaIcon',
  component: FlagArgentinaIcon,
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
} satisfies Meta<typeof FlagArgentinaIcon>;

export default meta;

type Story = StoryObj<typeof FlagArgentinaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
