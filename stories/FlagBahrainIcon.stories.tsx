import type { Meta, StoryObj } from '@storybook/react';

import { FlagBahrainIcon } from '../src/react/Flags';

const meta = {
  title: 'Flags/FlagBahrainIcon',
  component: FlagBahrainIcon,
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
} satisfies Meta<typeof FlagBahrainIcon>;

export default meta;

type Story = StoryObj<typeof FlagBahrainIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
