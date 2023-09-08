import type { Meta, StoryObj } from '@storybook/react';

import { StandalonePhoneRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandalonePhoneRegularIcon',
  component: StandalonePhoneRegularIcon,
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
} satisfies Meta<typeof StandalonePhoneRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandalonePhoneRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
