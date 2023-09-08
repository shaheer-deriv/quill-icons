import type { Meta, StoryObj } from '@storybook/react';

import { FlagAzerbaijanIcon } from '../src/react/flags';

const meta = {
  title: 'flags/FlagAzerbaijanIcon',
  component: FlagAzerbaijanIcon,
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
} satisfies Meta<typeof FlagAzerbaijanIcon>;

export default meta;

type Story = StoryObj<typeof FlagAzerbaijanIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
