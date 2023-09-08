import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneImageRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneImageRegularIcon',
  component: StandaloneImageRegularIcon,
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
} satisfies Meta<typeof StandaloneImageRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneImageRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
