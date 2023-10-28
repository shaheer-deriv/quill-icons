import type { Meta, StoryObj } from '@storybook/react';

import { EnergyWtiOilusIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/EnergyWtiOilusIcon',
  component: EnergyWtiOilusIcon,
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
} satisfies Meta<typeof EnergyWtiOilusIcon>;

export default meta;

type Story = StoryObj<typeof EnergyWtiOilusIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
