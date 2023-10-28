import type { Meta, StoryObj } from '@storybook/react';

import { FlagBahamasIcon } from '../src/react/Flags';

const meta = {
  title: 'Flags/FlagBahamasIcon',
  component: FlagBahamasIcon,
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
} satisfies Meta<typeof FlagBahamasIcon>;

export default meta;

type Story = StoryObj<typeof FlagBahamasIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
