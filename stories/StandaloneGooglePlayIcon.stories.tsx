import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneGooglePlayIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneGooglePlayIcon',
  component: StandaloneGooglePlayIcon,
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
} satisfies Meta<typeof StandaloneGooglePlayIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneGooglePlayIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
