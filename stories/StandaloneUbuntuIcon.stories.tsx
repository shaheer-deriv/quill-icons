import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneUbuntuIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneUbuntuIcon',
  component: StandaloneUbuntuIcon,
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
} satisfies Meta<typeof StandaloneUbuntuIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneUbuntuIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
