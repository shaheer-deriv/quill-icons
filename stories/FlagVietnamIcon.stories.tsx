import type { Meta, StoryObj } from '@storybook/react';

import { FlagVietnamIcon } from '../src/react/Flag';

const meta = {
  title: 'Flags/FlagVietnamIcon',
  component: FlagVietnamIcon,
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
} satisfies Meta<typeof FlagVietnamIcon>;

export default meta;

type Story = StoryObj<typeof FlagVietnamIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
