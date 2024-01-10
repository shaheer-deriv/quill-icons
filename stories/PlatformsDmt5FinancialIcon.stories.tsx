import type { Meta, StoryObj } from '@storybook/react';

import { PlatformsDmt5FinancialIcon } from '../src/react/Platforms';

const meta = {
  title: 'platforms/PlatformsDmt5FinancialIcon',
  component: PlatformsDmt5FinancialIcon,
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
} satisfies Meta<typeof PlatformsDmt5FinancialIcon>;

export default meta;

type Story = StoryObj<typeof PlatformsDmt5FinancialIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
