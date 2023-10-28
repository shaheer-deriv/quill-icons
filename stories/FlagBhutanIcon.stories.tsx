import type { Meta, StoryObj } from '@storybook/react';

import { FlagBhutanIcon } from '../src/react/Flags';

const meta = {
  title: 'Flags/FlagBhutanIcon',
  component: FlagBhutanIcon,
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
} satisfies Meta<typeof FlagBhutanIcon>;

export default meta;

type Story = StoryObj<typeof FlagBhutanIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
