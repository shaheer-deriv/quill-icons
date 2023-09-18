import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneWifiRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneWifiRegularIcon',
  component: StandaloneWifiRegularIcon,
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
} satisfies Meta<typeof StandaloneWifiRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneWifiRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
