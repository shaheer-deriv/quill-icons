import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneArrowDownRightBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneArrowDownRightBoldIcon',
  component: StandaloneArrowDownRightBoldIcon,
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
} satisfies Meta<typeof StandaloneArrowDownRightBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneArrowDownRightBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
