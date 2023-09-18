import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneLocationCrosshairsRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneLocationCrosshairsRegularIcon',
  component: StandaloneLocationCrosshairsRegularIcon,
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
} satisfies Meta<typeof StandaloneLocationCrosshairsRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneLocationCrosshairsRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
