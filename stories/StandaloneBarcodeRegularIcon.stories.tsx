import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneBarcodeRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneBarcodeRegularIcon',
  component: StandaloneBarcodeRegularIcon,
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
} satisfies Meta<typeof StandaloneBarcodeRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneBarcodeRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
