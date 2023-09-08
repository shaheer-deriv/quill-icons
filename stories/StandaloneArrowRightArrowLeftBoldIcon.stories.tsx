import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneArrowRightArrowLeftBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneArrowRightArrowLeftBoldIcon',
  component: StandaloneArrowRightArrowLeftBoldIcon,
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
} satisfies Meta<typeof StandaloneArrowRightArrowLeftBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneArrowRightArrowLeftBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
