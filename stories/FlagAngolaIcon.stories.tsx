import type { Meta, StoryObj } from '@storybook/react';

import { FlagAngolaIcon } from '../src/react/Flags';

const meta = {
  title: 'Flags/FlagAngolaIcon',
  component: FlagAngolaIcon,
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
} satisfies Meta<typeof FlagAngolaIcon>;

export default meta;

type Story = StoryObj<typeof FlagAngolaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
