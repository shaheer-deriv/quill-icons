import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneTabletRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneTabletRegularIcon',
  component: StandaloneTabletRegularIcon,
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
} satisfies Meta<typeof StandaloneTabletRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneTabletRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
