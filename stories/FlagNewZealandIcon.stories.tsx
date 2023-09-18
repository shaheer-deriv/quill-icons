import type { Meta, StoryObj } from '@storybook/react';

import { FlagNewZealandIcon } from '../src/react/Flag';

const meta = {
  title: 'Flags/FlagNewZealandIcon',
  component: FlagNewZealandIcon,
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
} satisfies Meta<typeof FlagNewZealandIcon>;

export default meta;

type Story = StoryObj<typeof FlagNewZealandIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
