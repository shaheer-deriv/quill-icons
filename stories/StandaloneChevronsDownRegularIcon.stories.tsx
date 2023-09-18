import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneChevronsDownRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneChevronsDownRegularIcon',
  component: StandaloneChevronsDownRegularIcon,
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
} satisfies Meta<typeof StandaloneChevronsDownRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneChevronsDownRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
