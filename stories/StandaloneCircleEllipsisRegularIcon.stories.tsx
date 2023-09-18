import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleEllipsisRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleEllipsisRegularIcon',
  component: StandaloneCircleEllipsisRegularIcon,
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
} satisfies Meta<typeof StandaloneCircleEllipsisRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleEllipsisRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
