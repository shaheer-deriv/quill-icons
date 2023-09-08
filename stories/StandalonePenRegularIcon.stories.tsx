import type { Meta, StoryObj } from '@storybook/react';

import { StandalonePenRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandalonePenRegularIcon',
  component: StandalonePenRegularIcon,
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
} satisfies Meta<typeof StandalonePenRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandalonePenRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
