import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneArrowRightBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneArrowRightBoldIcon',
  component: StandaloneArrowRightBoldIcon,
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
} satisfies Meta<typeof StandaloneArrowRightBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneArrowRightBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
