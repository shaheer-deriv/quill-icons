import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleSterlingBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleSterlingBoldIcon',
  component: StandaloneCircleSterlingBoldIcon,
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
} satisfies Meta<typeof StandaloneCircleSterlingBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleSterlingBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
