import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneArrowLeftRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneArrowLeftRegularIcon',
  component: StandaloneArrowLeftRegularIcon,
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
} satisfies Meta<typeof StandaloneArrowLeftRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneArrowLeftRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
