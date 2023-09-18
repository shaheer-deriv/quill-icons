import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneFourRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneFourRegularIcon',
  component: StandaloneFourRegularIcon,
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
} satisfies Meta<typeof StandaloneFourRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneFourRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
