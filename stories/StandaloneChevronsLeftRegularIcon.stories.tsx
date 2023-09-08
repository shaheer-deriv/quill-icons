import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneChevronsLeftRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneChevronsLeftRegularIcon',
  component: StandaloneChevronsLeftRegularIcon,
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
} satisfies Meta<typeof StandaloneChevronsLeftRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneChevronsLeftRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
