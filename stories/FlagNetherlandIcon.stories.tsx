import type { Meta, StoryObj } from '@storybook/react';

import { FlagNetherlandIcon } from '../src/react/Flag';

const meta = {
  title: 'Flags/FlagNetherlandIcon',
  component: FlagNetherlandIcon,
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
} satisfies Meta<typeof FlagNetherlandIcon>;

export default meta;

type Story = StoryObj<typeof FlagNetherlandIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
