import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneSquareFillIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneSquareFillIcon',
  component: StandaloneSquareFillIcon,
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
} satisfies Meta<typeof StandaloneSquareFillIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneSquareFillIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
