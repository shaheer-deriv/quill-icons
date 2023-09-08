import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneArrowRightToLineRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneArrowRightToLineRegularIcon',
  component: StandaloneArrowRightToLineRegularIcon,
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
} satisfies Meta<typeof StandaloneArrowRightToLineRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneArrowRightToLineRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
