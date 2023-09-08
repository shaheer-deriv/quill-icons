import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneGaugeMinBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneGaugeMinBoldIcon',
  component: StandaloneGaugeMinBoldIcon,
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
} satisfies Meta<typeof StandaloneGaugeMinBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneGaugeMinBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
