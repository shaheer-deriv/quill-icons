import type { Meta, StoryObj } from '@storybook/react';

import { FlagSpainIcon } from '../src/react/Flag';

const meta = {
  title: 'Flags/FlagSpainIcon',
  component: FlagSpainIcon,
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
} satisfies Meta<typeof FlagSpainIcon>;

export default meta;

type Story = StoryObj<typeof FlagSpainIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
