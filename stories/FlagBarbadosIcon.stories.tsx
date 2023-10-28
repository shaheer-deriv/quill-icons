import type { Meta, StoryObj } from '@storybook/react';

import { FlagBarbadosIcon } from '../src/react/Flags';

const meta = {
  title: 'Flags/FlagBarbadosIcon',
  component: FlagBarbadosIcon,
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
} satisfies Meta<typeof FlagBarbadosIcon>;

export default meta;

type Story = StoryObj<typeof FlagBarbadosIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
