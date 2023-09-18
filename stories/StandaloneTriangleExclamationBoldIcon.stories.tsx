import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneTriangleExclamationBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneTriangleExclamationBoldIcon',
  component: StandaloneTriangleExclamationBoldIcon,
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
} satisfies Meta<typeof StandaloneTriangleExclamationBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneTriangleExclamationBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
