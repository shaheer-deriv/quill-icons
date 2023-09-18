import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleDotRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleDotRegularIcon',
  component: StandaloneCircleDotRegularIcon,
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
} satisfies Meta<typeof StandaloneCircleDotRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleDotRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
