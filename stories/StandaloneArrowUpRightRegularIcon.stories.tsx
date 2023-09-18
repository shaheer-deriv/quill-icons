import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneArrowUpRightRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneArrowUpRightRegularIcon',
  component: StandaloneArrowUpRightRegularIcon,
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
} satisfies Meta<typeof StandaloneArrowUpRightRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneArrowUpRightRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
