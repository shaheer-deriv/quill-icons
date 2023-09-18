import type { Meta, StoryObj } from '@storybook/react';

import { FlagPolandIcon } from '../src/react/Flag';

const meta = {
  title: 'Flags/FlagPolandIcon',
  component: FlagPolandIcon,
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
} satisfies Meta<typeof FlagPolandIcon>;

export default meta;

type Story = StoryObj<typeof FlagPolandIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
