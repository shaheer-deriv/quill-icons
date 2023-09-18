import type { Meta, StoryObj } from '@storybook/react';

import { FlagMalaysiaIcon } from '../src/react/Flag';

const meta = {
  title: 'Flags/FlagMalaysiaIcon',
  component: FlagMalaysiaIcon,
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
} satisfies Meta<typeof FlagMalaysiaIcon>;

export default meta;

type Story = StoryObj<typeof FlagMalaysiaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
