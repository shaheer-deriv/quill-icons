import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneGrid2BoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneGrid2BoldIcon',
  component: StandaloneGrid2BoldIcon,
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
} satisfies Meta<typeof StandaloneGrid2BoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneGrid2BoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
