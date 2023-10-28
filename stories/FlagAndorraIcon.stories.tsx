import type { Meta, StoryObj } from '@storybook/react';

import { FlagAndorraIcon } from '../src/react/Flags';

const meta = {
  title: 'Flags/FlagAndorraIcon',
  component: FlagAndorraIcon,
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
} satisfies Meta<typeof FlagAndorraIcon>;

export default meta;

type Story = StoryObj<typeof FlagAndorraIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
