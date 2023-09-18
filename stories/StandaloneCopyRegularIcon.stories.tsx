import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCopyRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCopyRegularIcon',
  component: StandaloneCopyRegularIcon,
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
} satisfies Meta<typeof StandaloneCopyRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCopyRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
