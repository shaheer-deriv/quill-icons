import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneFiatOfframpRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneFiatOfframpRegularIcon',
  component: StandaloneFiatOfframpRegularIcon,
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
} satisfies Meta<typeof StandaloneFiatOfframpRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneFiatOfframpRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
