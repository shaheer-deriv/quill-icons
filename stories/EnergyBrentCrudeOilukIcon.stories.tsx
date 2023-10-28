import type { Meta, StoryObj } from '@storybook/react';

import { EnergyBrentCrudeOilukIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/EnergyBrentCrudeOilukIcon',
  component: EnergyBrentCrudeOilukIcon,
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
} satisfies Meta<typeof EnergyBrentCrudeOilukIcon>;

export default meta;

type Story = StoryObj<typeof EnergyBrentCrudeOilukIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
