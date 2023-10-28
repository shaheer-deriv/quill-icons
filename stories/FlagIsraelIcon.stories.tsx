import type { Meta, StoryObj } from '@storybook/react';

import { FlagIsraelIcon } from '../src/react/Flags';

const meta = {
  title: 'Flags/FlagIsraelIcon',
  component: FlagIsraelIcon,
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
} satisfies Meta<typeof FlagIsraelIcon>;

export default meta;

type Story = StoryObj<typeof FlagIsraelIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
