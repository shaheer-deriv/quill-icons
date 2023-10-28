import type { Meta, StoryObj } from '@storybook/react';

import { FlagItalyIcon } from '../src/react/Flags';

const meta = {
  title: 'Flags/FlagItalyIcon',
  component: FlagItalyIcon,
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
} satisfies Meta<typeof FlagItalyIcon>;

export default meta;

type Story = StoryObj<typeof FlagItalyIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
