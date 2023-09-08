import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneGearRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneGearRegularIcon',
  component: StandaloneGearRegularIcon,
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
} satisfies Meta<typeof StandaloneGearRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneGearRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
