import type { Meta, StoryObj } from '@storybook/react';

import { FlagParaguayIcon } from '../src/react/Flags';

const meta = {
  title: 'Flags/FlagParaguayIcon',
  component: FlagParaguayIcon,
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
} satisfies Meta<typeof FlagParaguayIcon>;

export default meta;

type Story = StoryObj<typeof FlagParaguayIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
