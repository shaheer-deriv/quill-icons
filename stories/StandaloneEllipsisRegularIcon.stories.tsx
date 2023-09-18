import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneEllipsisRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneEllipsisRegularIcon',
  component: StandaloneEllipsisRegularIcon,
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
} satisfies Meta<typeof StandaloneEllipsisRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneEllipsisRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
