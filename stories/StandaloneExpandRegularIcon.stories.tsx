import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneExpandRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneExpandRegularIcon',
  component: StandaloneExpandRegularIcon,
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
} satisfies Meta<typeof StandaloneExpandRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneExpandRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
