import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleArrowLeftBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleArrowLeftBoldIcon',
  component: StandaloneCircleArrowLeftBoldIcon,
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
} satisfies Meta<typeof StandaloneCircleArrowLeftBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleArrowLeftBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
