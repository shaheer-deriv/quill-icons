import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneHarmonyOsIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneHarmonyOsIcon',
  component: StandaloneHarmonyOsIcon,
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
} satisfies Meta<typeof StandaloneHarmonyOsIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneHarmonyOsIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
