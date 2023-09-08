import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneArrowDownLeftRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneArrowDownLeftRegularIcon',
  component: StandaloneArrowDownLeftRegularIcon,
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
} satisfies Meta<typeof StandaloneArrowDownLeftRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneArrowDownLeftRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
