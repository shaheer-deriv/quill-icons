import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleSterlingRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleSterlingRegularIcon',
  component: StandaloneCircleSterlingRegularIcon,
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
} satisfies Meta<typeof StandaloneCircleSterlingRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleSterlingRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
