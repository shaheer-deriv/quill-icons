import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneAtRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneAtRegularIcon',
  component: StandaloneAtRegularIcon,
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
} satisfies Meta<typeof StandaloneAtRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneAtRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
