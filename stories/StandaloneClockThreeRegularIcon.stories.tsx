import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneClockThreeRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneClockThreeRegularIcon',
  component: StandaloneClockThreeRegularIcon,
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
} satisfies Meta<typeof StandaloneClockThreeRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneClockThreeRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
