import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneAppStoreIosIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneAppStoreIosIcon',
  component: StandaloneAppStoreIosIcon,
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
} satisfies Meta<typeof StandaloneAppStoreIosIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneAppStoreIosIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
