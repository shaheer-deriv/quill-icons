import type { Meta, StoryObj } from '@storybook/react';

import { FlagBulgariaIcon } from '../src/react/Flag';

const meta = {
  title: 'Flags/FlagBulgariaIcon',
  component: FlagBulgariaIcon,
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
} satisfies Meta<typeof FlagBulgariaIcon>;

export default meta;

type Story = StoryObj<typeof FlagBulgariaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
