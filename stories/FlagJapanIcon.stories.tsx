import type { Meta, StoryObj } from '@storybook/react';

import { FlagJapanIcon } from '../src/react/Flag';

const meta = {
  title: 'Flags/FlagJapanIcon',
  component: FlagJapanIcon,
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
} satisfies Meta<typeof FlagJapanIcon>;

export default meta;

type Story = StoryObj<typeof FlagJapanIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
