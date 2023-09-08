import type { Meta, StoryObj } from '@storybook/react';

import { FlagBurkinaFasoIcon } from '../src/react/flags';

const meta = {
  title: 'flags/FlagBurkinaFasoIcon',
  component: FlagBurkinaFasoIcon,
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
} satisfies Meta<typeof FlagBurkinaFasoIcon>;

export default meta;

type Story = StoryObj<typeof FlagBurkinaFasoIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
