import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneMoneyBillBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneMoneyBillBoldIcon',
  component: StandaloneMoneyBillBoldIcon,
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
} satisfies Meta<typeof StandaloneMoneyBillBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneMoneyBillBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
