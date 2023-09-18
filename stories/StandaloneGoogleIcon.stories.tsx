import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneGoogleIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneGoogleIcon',
  component: StandaloneGoogleIcon,
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
} satisfies Meta<typeof StandaloneGoogleIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneGoogleIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
