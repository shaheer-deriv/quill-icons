import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneMoneyBillRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneMoneyBillRegularIcon',
  component: StandaloneMoneyBillRegularIcon,
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
} satisfies Meta<typeof StandaloneMoneyBillRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneMoneyBillRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
