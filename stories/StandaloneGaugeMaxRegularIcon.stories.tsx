import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneGaugeMaxRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneGaugeMaxRegularIcon',
  component: StandaloneGaugeMaxRegularIcon,
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
} satisfies Meta<typeof StandaloneGaugeMaxRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneGaugeMaxRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
