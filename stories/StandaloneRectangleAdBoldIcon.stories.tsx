import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneRectangleAdBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneRectangleAdBoldIcon',
  component: StandaloneRectangleAdBoldIcon,
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
} satisfies Meta<typeof StandaloneRectangleAdBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneRectangleAdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
