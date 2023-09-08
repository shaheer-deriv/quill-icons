import type { Meta, StoryObj } from '@storybook/react';

import { FlagCyprusIcon } from '../src/react/flags';

const meta = {
  title: 'flags/FlagCyprusIcon',
  component: FlagCyprusIcon,
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
} satisfies Meta<typeof FlagCyprusIcon>;

export default meta;

type Story = StoryObj<typeof FlagCyprusIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
