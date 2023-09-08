import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneGridRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneGridRegularIcon',
  component: StandaloneGridRegularIcon,
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
} satisfies Meta<typeof StandaloneGridRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneGridRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
