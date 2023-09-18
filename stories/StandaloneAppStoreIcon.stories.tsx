import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneAppStoreIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneAppStoreIcon',
  component: StandaloneAppStoreIcon,
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
} satisfies Meta<typeof StandaloneAppStoreIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneAppStoreIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
