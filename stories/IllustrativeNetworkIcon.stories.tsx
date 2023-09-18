import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeNetworkIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeNetworkIcon',
  component: IllustrativeNetworkIcon,
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
} satisfies Meta<typeof IllustrativeNetworkIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeNetworkIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
