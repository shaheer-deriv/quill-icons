import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleInfoRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleInfoRegularIcon',
  component: StandaloneCircleInfoRegularIcon,
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
} satisfies Meta<typeof StandaloneCircleInfoRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleInfoRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
