import type { Meta, StoryObj } from '@storybook/react';

import { FlagChinaTraditionalIcon } from '../src/react/Flags';

const meta = {
  title: 'Flags/FlagChinaTraditionalIcon',
  component: FlagChinaTraditionalIcon,
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
} satisfies Meta<typeof FlagChinaTraditionalIcon>;

export default meta;

type Story = StoryObj<typeof FlagChinaTraditionalIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
