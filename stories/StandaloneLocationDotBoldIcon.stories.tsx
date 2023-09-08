import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneLocationDotBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneLocationDotBoldIcon',
  component: StandaloneLocationDotBoldIcon,
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
} satisfies Meta<typeof StandaloneLocationDotBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneLocationDotBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
