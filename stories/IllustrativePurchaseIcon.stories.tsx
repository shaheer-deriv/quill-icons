import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativePurchaseIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativePurchaseIcon',
  component: IllustrativePurchaseIcon,
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
} satisfies Meta<typeof IllustrativePurchaseIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativePurchaseIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
