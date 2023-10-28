import type { Meta, StoryObj } from '@storybook/react';

import { FlagMaltaIcon } from '../src/react/Flags';

const meta = {
  title: 'Flags/FlagMaltaIcon',
  component: FlagMaltaIcon,
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
} satisfies Meta<typeof FlagMaltaIcon>;

export default meta;

type Story = StoryObj<typeof FlagMaltaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
