import type { Meta, StoryObj } from '@storybook/react';

import { FlagLuxembourgIcon } from '../src/react/Flag';

const meta = {
  title: 'Flags/FlagLuxembourgIcon',
  component: FlagLuxembourgIcon,
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
} satisfies Meta<typeof FlagLuxembourgIcon>;

export default meta;

type Story = StoryObj<typeof FlagLuxembourgIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
