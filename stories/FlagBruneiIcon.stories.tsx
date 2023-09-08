import type { Meta, StoryObj } from '@storybook/react';

import { FlagBruneiIcon } from '../src/react/flags';

const meta = {
  title: 'flags/FlagBruneiIcon',
  component: FlagBruneiIcon,
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
} satisfies Meta<typeof FlagBruneiIcon>;

export default meta;

type Story = StoryObj<typeof FlagBruneiIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
