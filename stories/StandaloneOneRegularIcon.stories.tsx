import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneOneRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneOneRegularIcon',
  component: StandaloneOneRegularIcon,
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
} satisfies Meta<typeof StandaloneOneRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneOneRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
