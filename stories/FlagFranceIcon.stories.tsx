import type { Meta, StoryObj } from '@storybook/react';

import { FlagFranceIcon } from '../src/react/Flag';

const meta = {
  title: 'Flags/FlagFranceIcon',
  component: FlagFranceIcon,
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
} satisfies Meta<typeof FlagFranceIcon>;

export default meta;

type Story = StoryObj<typeof FlagFranceIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
