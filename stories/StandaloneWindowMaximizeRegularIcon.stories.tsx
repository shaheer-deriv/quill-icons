import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneWindowMaximizeRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneWindowMaximizeRegularIcon',
  component: StandaloneWindowMaximizeRegularIcon,
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
} satisfies Meta<typeof StandaloneWindowMaximizeRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneWindowMaximizeRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
