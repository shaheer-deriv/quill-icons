import type { Meta, StoryObj } from '@storybook/react';

import { FlagUnitedKingdomIcon } from '../src/react/Flag';

const meta = {
  title: 'Flags/FlagUnitedKingdomIcon',
  component: FlagUnitedKingdomIcon,
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
} satisfies Meta<typeof FlagUnitedKingdomIcon>;

export default meta;

type Story = StoryObj<typeof FlagUnitedKingdomIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
