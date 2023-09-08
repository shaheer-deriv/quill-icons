import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneGearBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneGearBoldIcon',
  component: StandaloneGearBoldIcon,
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
} satisfies Meta<typeof StandaloneGearBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneGearBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
