import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleArrowRightRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleArrowRightRegularIcon',
  component: StandaloneCircleArrowRightRegularIcon,
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
} satisfies Meta<typeof StandaloneCircleArrowRightRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleArrowRightRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
