import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneSquareCheckRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneSquareCheckRegularIcon',
  component: StandaloneSquareCheckRegularIcon,
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
} satisfies Meta<typeof StandaloneSquareCheckRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneSquareCheckRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
