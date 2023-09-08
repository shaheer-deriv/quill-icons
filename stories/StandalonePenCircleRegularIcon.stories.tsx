import type { Meta, StoryObj } from '@storybook/react';

import { StandalonePenCircleRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandalonePenCircleRegularIcon',
  component: StandalonePenCircleRegularIcon,
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
} satisfies Meta<typeof StandalonePenCircleRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandalonePenCircleRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
