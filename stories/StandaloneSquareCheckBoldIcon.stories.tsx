import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneSquareCheckBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneSquareCheckBoldIcon',
  component: StandaloneSquareCheckBoldIcon,
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
} satisfies Meta<typeof StandaloneSquareCheckBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneSquareCheckBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
