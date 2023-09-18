import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleExclamationBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleExclamationBoldIcon',
  component: StandaloneCircleExclamationBoldIcon,
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
} satisfies Meta<typeof StandaloneCircleExclamationBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleExclamationBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
