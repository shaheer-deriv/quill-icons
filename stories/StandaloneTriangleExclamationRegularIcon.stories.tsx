import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneTriangleExclamationRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneTriangleExclamationRegularIcon',
  component: StandaloneTriangleExclamationRegularIcon,
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
} satisfies Meta<typeof StandaloneTriangleExclamationRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneTriangleExclamationRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
