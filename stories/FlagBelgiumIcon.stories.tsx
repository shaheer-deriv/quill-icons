import type { Meta, StoryObj } from '@storybook/react';

import { FlagBelgiumIcon } from '../src/react/Flag';

const meta = {
  title: 'Flags/FlagBelgiumIcon',
  component: FlagBelgiumIcon,
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
} satisfies Meta<typeof FlagBelgiumIcon>;

export default meta;

type Story = StoryObj<typeof FlagBelgiumIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
