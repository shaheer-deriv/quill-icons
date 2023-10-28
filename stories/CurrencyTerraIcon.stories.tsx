import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyTerraIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyTerraIcon',
  component: CurrencyTerraIcon,
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
} satisfies Meta<typeof CurrencyTerraIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyTerraIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
