import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeTradeWiselyIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeTradeWiselyIcon',
  component: IllustrativeTradeWiselyIcon,
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
} satisfies Meta<typeof IllustrativeTradeWiselyIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeTradeWiselyIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
