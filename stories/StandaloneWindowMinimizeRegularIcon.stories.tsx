import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneWindowMinimizeRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneWindowMinimizeRegularIcon',
  component: StandaloneWindowMinimizeRegularIcon,
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
} satisfies Meta<typeof StandaloneWindowMinimizeRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneWindowMinimizeRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
