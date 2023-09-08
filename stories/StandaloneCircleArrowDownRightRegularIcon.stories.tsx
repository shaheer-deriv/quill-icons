import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleArrowDownRightRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleArrowDownRightRegularIcon',
  component: StandaloneCircleArrowDownRightRegularIcon,
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
} satisfies Meta<typeof StandaloneCircleArrowDownRightRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleArrowDownRightRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
