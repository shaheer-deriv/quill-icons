import type { Meta, StoryObj } from '@storybook/react';

import { StandalonePenLineRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandalonePenLineRegularIcon',
  component: StandalonePenLineRegularIcon,
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
} satisfies Meta<typeof StandalonePenLineRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandalonePenLineRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
