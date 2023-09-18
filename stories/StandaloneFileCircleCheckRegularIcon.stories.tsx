import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneFileCircleCheckRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneFileCircleCheckRegularIcon',
  component: StandaloneFileCircleCheckRegularIcon,
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
} satisfies Meta<typeof StandaloneFileCircleCheckRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneFileCircleCheckRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
