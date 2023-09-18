import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCheckBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCheckBoldIcon',
  component: StandaloneCheckBoldIcon,
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
} satisfies Meta<typeof StandaloneCheckBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCheckBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
