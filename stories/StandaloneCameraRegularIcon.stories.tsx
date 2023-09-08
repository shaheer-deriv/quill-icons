import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCameraRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneCameraRegularIcon',
  component: StandaloneCameraRegularIcon,
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
} satisfies Meta<typeof StandaloneCameraRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCameraRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
