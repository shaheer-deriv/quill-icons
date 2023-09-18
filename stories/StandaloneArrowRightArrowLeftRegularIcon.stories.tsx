import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneArrowRightArrowLeftRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneArrowRightArrowLeftRegularIcon',
  component: StandaloneArrowRightArrowLeftRegularIcon,
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
} satisfies Meta<typeof StandaloneArrowRightArrowLeftRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneArrowRightArrowLeftRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
