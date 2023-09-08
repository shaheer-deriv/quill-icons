import type { Meta, StoryObj } from '@storybook/react';

import { StandalonePlaceholderRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandalonePlaceholderRegularIcon',
  component: StandalonePlaceholderRegularIcon,
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
} satisfies Meta<typeof StandalonePlaceholderRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandalonePlaceholderRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
