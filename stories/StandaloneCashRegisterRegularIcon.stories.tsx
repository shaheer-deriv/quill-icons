import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCashRegisterRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneCashRegisterRegularIcon',
  component: StandaloneCashRegisterRegularIcon,
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
} satisfies Meta<typeof StandaloneCashRegisterRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCashRegisterRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
