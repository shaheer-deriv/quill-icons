import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleSortDownRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleSortDownRegularIcon',
  component: StandaloneCircleSortDownRegularIcon,
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
} satisfies Meta<typeof StandaloneCircleSortDownRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleSortDownRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
