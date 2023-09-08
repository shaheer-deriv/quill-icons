import type { Meta, StoryObj } from '@storybook/react';

import { FlagBrazilIcon } from '../src/react/flags';

const meta = {
  title: 'flags/FlagBrazilIcon',
  component: FlagBrazilIcon,
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
} satisfies Meta<typeof FlagBrazilIcon>;

export default meta;

type Story = StoryObj<typeof FlagBrazilIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
