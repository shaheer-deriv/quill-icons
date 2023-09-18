import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleFiveRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleFiveRegularIcon',
  component: StandaloneCircleFiveRegularIcon,
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
} satisfies Meta<typeof StandaloneCircleFiveRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleFiveRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
